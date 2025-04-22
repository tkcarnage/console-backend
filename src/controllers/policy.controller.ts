import { Request, Response } from "express";
import prisma from "../utils/prisma";
import { Prisma, AccessDurationType } from "../generated/prisma-client";

// Get admin user ID from environment variable
const ADMIN_USER_ID = process.env.ADMIN_USER_ID;

/**
 * @description Get a list of all policies
 * @route GET /api/policies
 * @access Public
 */
export const listPolicies = async (req: Request, res: Response) => {
  const userId = req.query.userId as string | undefined;

  // Base where clause for non-deleted policies
  const baseWhere: Prisma.policyWhereInput = {
    deletedAt: null,
  };

  // Visibility clause: starts empty
  let visibilityWhere: Prisma.policyWhereInput = {};

  if (userId === ADMIN_USER_ID) {
    // Admin user: Apply no visibility filters
    visibilityWhere = {};
  } else if (userId) {
    // Non-admin user: Apply standard visibility rules
    visibilityWhere = {
      OR: [
        // 1. Policy is visible to everyone
        { visibleToEveryone: true },
        // 2. User is directly in the visibleUsers list
        {
          visibleUsers: {
            some: { id: userId },
          },
        },
        // 3. User is a member of a group in the visibleGroups list
        {
          visibleGroups: {
            some: {
              members: {
                some: { id: userId },
              },
            },
          },
        },
      ],
    };
  } else {
    // If no user ID, only show policies visible to everyone
    visibilityWhere = {
      visibleToEveryone: true,
    };
  }

  try {
    const policies = await prisma.policy.findMany({
      include: {
        app: {
          select: {
            id: true,
            name: true,
            logo: true,
          },
        },
        _count: {
          select: { reviewers: true, visibleUsers: true, visibleGroups: true },
        },
      },
      orderBy: {
        name: "asc",
      },
      where: {
        // Combine base conditions with visibility rules
        AND: [baseWhere, visibilityWhere],
      },
    });
    res.status(200).json(policies);
  } catch (error) {
    console.error("Failed to list policies:", error);
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Failed to fetch policies", error: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

/**
 * @description Create a new policy
 * @route POST /api/policies
 * @access Public
 */
export const createPolicy = async (req: Request, res: Response) => {
  const {
    name,
    description,
    appId,
    visibleToEveryone = false,
    visibleUserIds,
    visibleGroupIds,
    accessDurationType,
    accessDurationDays,
    reviewerIds,
    useAppOwnerAsReviewer = false,
    approvalSteps = [],
    revocationSteps = [],
    provisioningSteps = [],
  } = req.body;

  if (!appId || !accessDurationType) {
    return res.status(400).json({
      message: "Missing required fields: appId and accessDurationType.",
    });
  }

  if (
    !Object.values(AccessDurationType).includes(
      accessDurationType as AccessDurationType
    )
  ) {
    return res.status(400).json({
      message: `Invalid accessDurationType. Must be one of: ${Object.values(
        AccessDurationType
      ).join(", ")}`,
    });
  }

  if (
    accessDurationType === AccessDurationType.FIXED &&
    (typeof accessDurationDays !== "number" || accessDurationDays <= 0)
  ) {
    return res.status(400).json({
      message:
        "accessDurationDays (positive number) is required when accessDurationType is FIXED.",
    });
  }

  const data: Prisma.policyCreateInput = {
    name,
    description,
    app: { connect: { id: appId } },
    visibleToEveryone,
    accessDurationType,
    accessDurationDays:
      accessDurationType === AccessDurationType.FIXED
        ? accessDurationDays
        : undefined,
    useAppOwnerAsReviewer,
    approvalSteps: approvalSteps as Prisma.InputJsonValue,
    provisioningSteps: provisioningSteps as Prisma.InputJsonValue,
    revocationSteps: revocationSteps as Prisma.InputJsonValue,
    visibleUsers:
      visibleUserIds && visibleUserIds.length > 0
        ? { connect: visibleUserIds.map((id: string) => ({ id })) }
        : undefined,
    visibleGroups:
      visibleGroupIds && visibleGroupIds.length > 0
        ? { connect: visibleGroupIds.map((id: string) => ({ id })) }
        : undefined,
    reviewers:
      reviewerIds && reviewerIds.length > 0
        ? { connect: reviewerIds.map((id: string) => ({ id })) }
        : undefined,
  };

  try {
    const newPolicy = await prisma.policy.create({
      data,
      include: {
        app: { select: { id: true, name: true, logo: true } },
        visibleUsers: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
        visibleGroups: { select: { id: true, name: true } },
        reviewers: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
      },
    });
    res.status(201).json(newPolicy);
  } catch (error) {
    console.error("Failed to create policy:", error);
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Failed to create policy", error: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

/**
 * @description Get a single policy by ID
 * @route GET /api/policies/:id
 * @access Public
 */
export const getPolicyById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const policy = await prisma.policy.findUnique({
      where: { id },
      include: {
        app: {
          select: {
            id: true,
            name: true,
            logo: true,
          },
        },
        visibleUsers: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
        visibleGroups: { select: { id: true, name: true } },
        reviewers: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
      },
    });

    if (!policy || policy.deletedAt) {
      return res.status(404).json({ message: "Policy not found" });
    }

    res.status(200).json(policy);
  } catch (error) {
    console.error("Failed to get policy:", error);
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Failed to get policy", error: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

/**
 * @description Update a policy
 * @route PUT /api/policies/:id
 * @access Public
 */
export const updatePolicy = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    name,
    description,
    appId,
    visibleToEveryone,
    visibleUserIds,
    visibleGroupIds,
    accessDurationType,
    accessDurationDays,
    reviewerIds,
    useAppOwnerAsReviewer,
    approvalSteps,
    revocationSteps,
    provisioningSteps,
  } = req.body;

  try {
    const existingPolicy = await prisma.policy.findUnique({
      where: { id, deletedAt: null },
    });

    if (!existingPolicy) {
      return res.status(404).json({ message: "Policy not found" });
    }

    if (
      accessDurationType &&
      !Object.values(AccessDurationType).includes(
        accessDurationType as AccessDurationType
      )
    ) {
      return res.status(400).json({
        message: `Invalid accessDurationType. Must be one of: ${Object.values(
          AccessDurationType
        ).join(", ")}`,
      });
    }

    const finalAccessType =
      accessDurationType || existingPolicy.accessDurationType;
    const finalAccessDays =
      accessDurationDays !== undefined
        ? accessDurationDays
        : existingPolicy.accessDurationDays;
    if (
      finalAccessType === AccessDurationType.FIXED &&
      (typeof finalAccessDays !== "number" || finalAccessDays <= 0)
    ) {
      return res.status(400).json({
        message:
          "accessDurationDays (positive number) is required when accessDurationType is FIXED.",
      });
    }

    const updateData: Prisma.policyUpdateInput = {};

    if (name !== undefined) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (appId) updateData.app = { connect: { id: appId } };
    if (visibleToEveryone !== undefined)
      updateData.visibleToEveryone = visibleToEveryone;
    if (accessDurationType) updateData.accessDurationType = accessDurationType;
    if (accessDurationType === AccessDurationType.FIXED && accessDurationDays) {
      updateData.accessDurationDays = accessDurationDays;
    } else if (
      accessDurationType &&
      finalAccessType !== AccessDurationType.FIXED
    ) {
      updateData.accessDurationDays = null;
    } else if (
      !accessDurationType &&
      finalAccessType !== AccessDurationType.FIXED &&
      accessDurationDays !== undefined
    ) {
      updateData.accessDurationDays = null;
    }

    if (useAppOwnerAsReviewer !== undefined)
      updateData.useAppOwnerAsReviewer = useAppOwnerAsReviewer;
    if (approvalSteps !== undefined)
      updateData.approvalSteps = approvalSteps as Prisma.InputJsonValue;
    if (provisioningSteps !== undefined)
      updateData.provisioningSteps = provisioningSteps as Prisma.InputJsonValue;
    if (revocationSteps !== undefined)
      updateData.revocationSteps = revocationSteps as Prisma.InputJsonValue;

    if (visibleUserIds) {
      updateData.visibleUsers = {
        set: visibleUserIds.map((id: string) => ({ id })),
      };
    }

    if (visibleGroupIds) {
      updateData.visibleGroups = {
        set: visibleGroupIds.map((id: string) => ({ id })),
      };
    }

    if (reviewerIds) {
      updateData.reviewers = { set: reviewerIds.map((id: string) => ({ id })) };
    }

    const updatedPolicy = await prisma.policy.update({
      where: { id },
      data: updateData,
      include: {
        app: { select: { id: true, name: true, logo: true } },
        visibleUsers: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
        visibleGroups: { select: { id: true, name: true } },
        reviewers: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
      },
    });

    res.status(200).json(updatedPolicy);
  } catch (error) {
    console.error("Failed to update policy:", error);
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Failed to update policy", error: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

/**
 * @description Delete a policy
 * @route DELETE /api/policies/:id
 * @access Public
 */
export const deletePolicy = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const existingPolicy = await prisma.policy.findUnique({
      where: { id, deletedAt: null },
    });

    if (!existingPolicy) {
      return res.status(404).json({ message: "Policy not found" });
    }

    await prisma.policy.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    res.status(200).json({ message: "Policy deleted successfully" });
  } catch (error) {
    console.error("Failed to delete policy:", error);
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Failed to delete policy", error: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

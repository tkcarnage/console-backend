import { Request, Response } from "express";
import prisma from "../utils/prisma";

export const listGroups = async (_req: Request, res: Response) => {
  try {
    const groups = await prisma.cnsl_group.findMany({
      select: {
        id: true,
        name: true,
        description: true,
      },
      where: {
        deletedAt: null,
      },
      orderBy: {
        name: "asc",
      },
    });

    res.status(200).json(groups);
  } catch (error) {
    console.error("Failed to list groups:", error);

    if (error instanceof Error) {
      res.status(500).json({
        message: "Failed to fetch groups",
        error: error.message,
      });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const getGroupById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const group = await prisma.cnsl_group.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        description: true,
      },
    });

    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }

    res.status(200).json(group);
  } catch (error) {
    console.error("Failed to get group:", error);

    if (error instanceof Error) {
      res.status(500).json({
        message: "Failed to get group",
        error: error.message,
      });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

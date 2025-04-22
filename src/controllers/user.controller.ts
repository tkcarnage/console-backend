import { Request, Response } from "express";
import prisma from "../utils/prisma";

export const listUsers = async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
      },
      where: {
        deletedAt: null,
      },
      orderBy: {
        firstName: "asc",
      },
    });

    res.status(200).json(users);
  } catch (error) {
    console.error("Failed to list users:", error);

    if (error instanceof Error) {
      res.status(500).json({
        message: "Failed to fetch users",
        error: error.message,
      });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Failed to get user:", error);

    if (error instanceof Error) {
      res.status(500).json({
        message: "Failed to get user",
        error: error.message,
      });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

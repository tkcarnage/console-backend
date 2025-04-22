import { Request, Response } from "express";
import prisma from "../utils/prisma";

export const listApps = async (_req: Request, res: Response) => {
  try {
    const apps = await prisma.app.findMany({
      select: {
        id: true,
        name: true,
        url: true,
        logo: true,
        owner: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
      where: {
        deletedAt: null,
      },
      orderBy: {
        name: "asc",
      },
    });

    res.status(200).json(apps);
  } catch (error) {
    console.error("Failed to list apps:", error);

    if (error instanceof Error) {
      res.status(500).json({
        message: "Failed to fetch apps",
        error: error.message,
      });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const getAppById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const app = await prisma.app.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        url: true,
        logo: true,
        owner: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    if (!app) {
      return res.status(404).json({ message: "App not found" });
    }

    res.status(200).json(app);
  } catch (error) {
    console.error("Failed to get app:", error);

    if (error instanceof Error) {
      res.status(500).json({
        message: "Failed to get app",
        error: error.message,
      });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

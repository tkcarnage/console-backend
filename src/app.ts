import express, { Express, Request, Response } from "express";
import cors from "cors";
import policyRoutes from "./routes/policy.routes"; // Import policy routes
import userRoutes from "./routes/user.routes"; // Import user routes
import groupRoutes from "./routes/group.routes"; // Import group routes
import appRoutes from "./routes/app.routes"; // Import app routes
import prisma from "./utils/prisma"; // Import prisma client for shutdown hook

const app: Express = express();

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript + Prisma Server - Root OK");
});

// Mount routes
app.use("/api/policies", policyRoutes);
app.use("/api/users", userRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/apps", appRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// TODO: Add error handling middleware

// Graceful shutdown for Prisma Client
process.on("SIGINT", async () => {
  console.log("Received SIGINT. Shutting down Prisma Client...");
  await prisma.$disconnect();
  console.log("Prisma Client disconnected. Exiting.");
  process.exit(0);
});
process.on("SIGTERM", async () => {
  console.log("Received SIGTERM. Shutting down Prisma Client...");
  await prisma.$disconnect();
  console.log("Prisma Client disconnected. Exiting.");
  process.exit(0);
});

export default app;

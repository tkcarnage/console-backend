import { PrismaClient } from "../generated/prisma-client";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Prisma Client will automatically use DATABASE_URL from process.env
// Ensure DATABASE_URL is set in your .env file

// Instantiate Prisma Client once
const prisma = new PrismaClient();

export default prisma;

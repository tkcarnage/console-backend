import { Router, Request, Response } from "express";
import { listUsers, getUserById } from "../controllers/user.controller";

const router = Router();

// Define routes
router.get("/", function (req: Request, res: Response) {
  listUsers(req, res);
});

router.get("/:id", function (req: Request, res: Response) {
  getUserById(req, res);
});

export default router;

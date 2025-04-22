import { Router, Request, Response } from "express";
import { listGroups, getGroupById } from "../controllers/group.controller";

const router = Router();

// Define routes
router.get("/", function (req: Request, res: Response) {
  listGroups(req, res);
});

router.get("/:id", function (req: Request, res: Response) {
  getGroupById(req, res);
});

export default router;

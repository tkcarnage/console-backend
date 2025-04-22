import { Router, Request, Response } from "express";
import { listApps, getAppById } from "../controllers/app.controller";

const router = Router();

// Define routes
router.get("/", function (req: Request, res: Response) {
  listApps(req, res);
});

router.get("/:id", function (req: Request, res: Response) {
  getAppById(req, res);
});

export default router;

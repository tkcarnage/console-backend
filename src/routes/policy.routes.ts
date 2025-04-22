import { Router, Request, Response } from "express";
import {
  listPolicies,
  createPolicy,
  getPolicyById,
  updatePolicy,
  deletePolicy,
} from "../controllers/policy.controller";

const router = Router();

// Define routes
router.get("/", listPolicies); // GET /api/policies

router.post("/", function (req: Request, res: Response) {
  createPolicy(req, res);
});

router.get("/:id", function (req: Request, res: Response) {
  getPolicyById(req, res);
});

router.put("/:id", function (req: Request, res: Response) {
  updatePolicy(req, res);
});

router.delete("/:id", function (req: Request, res: Response) {
  deletePolicy(req, res);
});

export default router;

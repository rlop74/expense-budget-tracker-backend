import { Router } from "express";
import { GoalsController } from "../controllers/goals.controller.js";

const router = Router();
const goalsController = new GoalsController(); // instantiate class

router.get("/", goalsController.getAllGoals.bind(goalsController));

export default router;
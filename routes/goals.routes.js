import { Router } from "express";
import { GoalsController } from "../controllers/goals.controller.js";

const router = Router();
const goalsController = new GoalsController(); // instantiate class

// http://localhost:3000/goals/

router.get("/", goalsController.getAllGoals.bind(goalsController));
router.post("/add-goal", goalsController.addGoal.bind(goalsController));
router.delete(
    "/delete-goal/:id",
    goalsController.deleteGoal.bind(goalsController)
);
router.patch("/edit-goal/:id", goalsController.editGoal.bind(goalsController));
router.patch("/add-amount/:id", goalsController.addAmount.bind(goalsController));

export default router;

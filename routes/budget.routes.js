import { Router } from "express";
import { BudgetController } from "../controllers/budget.controller.js";

const router = Router();
const budgetController = new BudgetController(); // instantiate class

router.get("/", budgetController.getAllBudgets.bind(budgetController));

export default router;

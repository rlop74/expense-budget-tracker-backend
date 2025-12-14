import { Router } from "express";
import { ExpenseController } from "../controllers/expenses.controller.js";

const router = Router();
const expenseController = new ExpenseController(); // instantiate class

router.get("/:id", expenseController.getAllExpenses.bind(expenseController));
router.post("/add-expense", expenseController.addExpense.bind(expenseController));

export default router;

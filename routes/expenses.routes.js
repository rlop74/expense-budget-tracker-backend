import { Router } from "express";
import { supabase } from "../supabase.js";
import { ExpenseController } from "../controllers/expenses.controller.js";

const router = Router();
const expenseController = new ExpenseController(); // instantiate class

router.get("/", expenseController.getAllExpenses);
router.post("/add-expense", (req, res) => expenseController.addExpense(req, res));

export default router;

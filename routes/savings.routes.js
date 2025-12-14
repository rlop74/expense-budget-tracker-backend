import { Router } from "express";
import { SavingsController } from "../controllers/savings.controller.js";

const router = Router();
const savingsController = new SavingsController(); // instantiate class

router.get("/:id", savingsController.getAllSavings.bind(savingsController));
router.post("/new-savings", savingsController.addSavings.bind(savingsController));

export default router;

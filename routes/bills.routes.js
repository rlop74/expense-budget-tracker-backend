import { Router } from "express";
import { BillsController } from "../controllers/bills.controller.js";

const router = Router();
const billsController = new BillsController(); // instantiate class

router.get("/", billsController.getAllBills.bind(billsController));
router.post("/add-bill", billsController.addBill.bind(billsController));
router.post("/edit-bill/:id", billsController.editBill.bind(billsController));

export default router;

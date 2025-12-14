import { Router } from "express";
import { supabase } from "../supabase.js";
import { UsersController } from "../controllers/users.controller.js";

const router = Router();
const usersController = new UsersController(); // instantiate class

// http://localhost:3000/users

router.get("/", usersController.getAllUsers.bind(usersController));

// get user info
router.get("/:id", usersController.getUserById.bind(usersController));

router.post(
    "/update-income/:id",
    usersController.updateUserIncome.bind(usersController)
);

export default router;

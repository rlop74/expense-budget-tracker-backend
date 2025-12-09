import { Router } from "express";
import { supabase } from "../supabase.js";

const router = Router();

// http://localhost:3000/users

router.get("/", async (req, res) => {
    try {
        const { data, error } = await supabase.from("users").select("*");
        console.log(data);
        if (error) {
            return res.status(400).send(error);
        }
        res.status(200).send(data);
    } catch (err) {
        return res.status(400).send(err);
    }
});

// get user info
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase
            .from("users")
            .select()
            .eq("id", id)
        if (error) {
            return res.status(400).send(error);
        }
        res.status(200).send(data);
    } catch (err) {
        return res.status(400).send(err);
    }
});

export default router;

import { Router } from "express";
import { supabase } from "../supabase.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const { data, error } = await supabase.from("expenses").select("*");
        if (error) {
            res.status(400).send(error);
        }
        res.status(200).send(data)
    } catch (err) {
        return res.status(400).send(err);
    }
});

export default router;
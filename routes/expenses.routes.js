import { Router } from "express";
import { supabase } from "../supabase.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const { data, error } = await supabase.from("expenses").select("*");
        if (error) {
            return res.status(400).send(error);
        }
        res.status(200).send(data);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.post("/add-expense", async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("expenses")
            .insert(req.body)
            .select();

        if (error) {
            return res.status(400).send(error);
        }
        console.log(data[0]);
        res.status(200).json(data[0]);
    } catch (err) {
        res.status(400).send(err);
    }
});

export default router;

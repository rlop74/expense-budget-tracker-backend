import { supabase } from "../supabase.js";

export class SavingsController {
    constructor() {
        this.tableName = "savings";
    }

    async getAllSavings(req, res) {
        try {
            const { id } = req.params;
            const { data, error } = await supabase
                .from("savings")
                .select("*")
                .eq("user_id", id);
            if (error) {
                return res.status(400).send(error);
            }
            res.status(200).send(data);
        } catch (err) {
            return res.status(400).send(err);
        }
    }

    async addSavings(req, res) {
        try {
            const { data, error } = await supabase
                .from("savings")
                .insert(req.body)
                .select()
                .single();
            res.status(200).send(data);
        } catch (err) {
            return res.status(400).send(err);
        }
    }
}

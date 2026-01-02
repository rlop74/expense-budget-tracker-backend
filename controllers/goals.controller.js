import { supabase } from "../supabase.js";

export class GoalsController {
    constructor() {
        this.tableName = "goals";
    }

    async getAllGoals(req, res) {
        try {
            const { data, error } = await supabase
                .from(this.tableName)
                .select("*");
            if (error) {
                return res.status(400).send(error);
            }
            res.status(200).send(data);
        } catch (err) {
            return res.status(400).send(err);
        }
    }

    async addGoal(req, res) {
        try {
            const { data, error } = await supabase
                .from("goals")
                .insert(req.body)
                .select()
                .single(); // returns only the object instead of putting it in an array
            if (error) {
                return res.status(400).send(error);
            }
            res.status(200).send(data);
        } catch (err) {
            return res.status(400).send(err);
        }
    }
}

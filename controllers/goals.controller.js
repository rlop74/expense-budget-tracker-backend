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
                .from(this.tableName)
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

    async deleteGoal(req, res) {
        const { id } = req.params;
        try {
            const response = await supabase
                .from(this.tableName)
                .delete()
                .eq("id", id);
            res.status(response.status).send({
                message: `User with ID: ${id}, has been deleted`,
            });
        } catch (err) {
            return res.status(400).send(err);
        }
    }

    async editGoal(req, res) {
        const { id } = req.params;
        try {
            const { error } = await supabase
                .from(this.tableName)
                .update(req.body)
                .eq("id", id);
            if (error) {
                return res.status(400).send(error);
            }
            res.status(200).send({ message: "Goal updated successfully" });
        } catch (err) {
            return res.status(400).send(err);
        }
    }

    async addAmount(req, res) {
        const { id } = req.params;
        try {
            const { error } = await supabase
                .from(this.tableName)
                .update(req.body)
                .eq("id", id);
            if (error) {
                return res.status(400).send(error);
            }
            res.status(200).send({ message: "Current amount updated" });
        } catch (err) {
            return res.status(400).send(err);
        }
    }
}

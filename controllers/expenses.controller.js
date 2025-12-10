import { supabase } from "../supabase.js";

export class ExpenseController {
    async getAllExpenses(req, res) {
        try {
            const { data, error } = await supabase.from("expenses").select("*");
            if (error) {
                return res.status(400).send(error);
            }
            res.status(200).send(data);
        } catch (err) {
            return res.status(400).send(err);
        }
    }

    async addExpense(req, res) {
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
    }
}

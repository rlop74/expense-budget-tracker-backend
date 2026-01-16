import { supabase } from "../supabase.js";

export class BudgetController {
    constructor() {
        this.tableName = "budget";
    }

    async getAllBudgets(req, res) {
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
}

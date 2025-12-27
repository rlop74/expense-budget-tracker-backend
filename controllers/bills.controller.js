import { supabase } from "../supabase.js";

export class BillsController {
    constructor() {
        this.tableName = "bills";
    }

    async getAllBills(req, res) {
        try {
            const { data, error } = await supabase.from("bills").select();
            if (error) {
                return res.status(400).send(error);
            }
            res.status(200).send(data);
        } catch (err) {
            return res.status(400).send(err);
        }
    }

    async addBill(req, res) {
        console.log(req.body);
        try {
            const { data, error } = await supabase
                .from("bills")
                .insert(req.body)
                .select();
            if (error) {
                return res.status(400).send(error);
            }
            res.status(200).send(data[0]);
        } catch (err) {
            return res.status(400).send(err);
        }
    }
}

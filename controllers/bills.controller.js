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

    async editBill(req, res) {
        const { id } = req.params;
        try {
            const { data, error } = await supabase
                .from("bills")
                .update(req.body)
                .eq("id", id);
        } catch (err) {
            return res.status(400).send(err);
        }
    }

    async deleteBill(req, res) {
        const { id } = req.params;
        try {
            const response = await supabase.from("bills").delete().eq("id", id);
            res.status(response.status).send(response);
        } catch (err) {
            return res.status(400).send(response);
        }
    }
}

import { supabase } from "../supabase.js";

export class UsersController {
    constructor() {
        this.tableName = "user_profiles";
    }
    async getAllUsers(req, res) {
        try {
            const { data, error } = await supabase
                .from(this.tableName)
                .select("*");
            console.log(data);
            if (error) {
                return res.status(400).send(error);
            }
            res.status(200).send(data);
        } catch (err) {
            return res.status(400).send(err);
        }
    }

    async getUserById(req, res) {
        try {
            const { id } = req.params;
            const { data, error } = await supabase
                .from(this.tableName)
                .select("*")
                .eq("auth_id", id)
                .single();
            if (error) {
                return res.status(400).send(error);
            }
            res.status(200).send(data);
        } catch (err) {
            return res.status(400).send(err);
        }
    }
}

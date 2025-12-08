import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const supabase_key = process.env.SUPABASE_KEY;
const supabase_url = process.env.SUPABASE_URL;

if (!supabase_key || !supabase_url) {
    throw new Error("No key or url");
}

export const supabase = createClient(supabase_url, supabase_key);

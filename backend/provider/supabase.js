require("dotenv").config();
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecret = process.env.SUPABASE_SECRET;
const supabase = createClient(supabaseUrl, supabaseSecret);

module.exports = supabase;
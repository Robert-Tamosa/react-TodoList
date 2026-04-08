import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://okrmqzrxmssikyoobsbp.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rcm1xenJ4bXNzaWt5b29ic2JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2MDk1NTMsImV4cCI6MjA5MTE4NTU1M30.lHFxRQxUracXGI8FWFhDCawV8OzTqgjWPOEYO0zFGEE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
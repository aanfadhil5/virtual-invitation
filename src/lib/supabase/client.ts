import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Initialize the Supabase client
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-anon-key";

// Check if we have valid credentials before creating the client
const isValidSupabaseConfig =
  supabaseUrl.includes("supabase.co") && supabaseAnonKey.length > 0;

// Create a dummy client or a real one based on the environment
export const supabase: SupabaseClient = isValidSupabaseConfig
  ? createClient(supabaseUrl, supabaseAnonKey)
  : ({
      from: () => ({
        select: () => Promise.resolve({ data: [], error: null }),
        insert: () => Promise.resolve({ data: null, error: null }),
        order: () => ({
          select: () => Promise.resolve({ data: [], error: null }),
        }),
      }),
    } as unknown as SupabaseClient); // Type casting with a more specific type

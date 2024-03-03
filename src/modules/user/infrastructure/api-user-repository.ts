import { createSupabaseServerClient } from "@/lib/supabase/server";
import { User } from "../domain/user";
import { UserRepository } from "../domain/user-repository";

export function createApiUserRepository(): UserRepository {
  return {
    get
  };
}

async function get(): Promise<User | null> {
  const supabase = await createSupabaseServerClient();

  const { data } = await supabase.from("users").select("*").limit(1);

  return data![0] || null;
}

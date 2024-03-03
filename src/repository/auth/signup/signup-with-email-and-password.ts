"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { SignUp } from "@/types";

export async function signUpWithEmailAndPassword(data: SignUp) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signUp({
    email: data.email + data.email,
    password: data.password
  });

  return JSON.stringify(result);
}

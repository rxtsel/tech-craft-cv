"use server";

import { supabase } from "@/lib/supabase/client";
import { SignIn } from "@/types";

export const signInWithEmail = async (data: SignIn) => {
  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password
  });

  return JSON.stringify(result);
};

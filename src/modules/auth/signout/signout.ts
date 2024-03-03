"use server";

import { AUTH_ROUTES } from "@/constants";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function signOut() {
  const supabase = await createSupabaseServerClient();

  await supabase.auth.signOut();

  redirect(AUTH_ROUTES.signIn);
}

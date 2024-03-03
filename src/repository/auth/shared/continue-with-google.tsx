import { AUTH_ROUTES } from "@/constants";
import { supabase } from "@/lib/supabase/client";

export const continueWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}${AUTH_ROUTES.callback}`
    }
  });
};

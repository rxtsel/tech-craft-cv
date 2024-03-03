import { AUTH_ROUTES } from "@/constants";
import { supabase } from "@/lib/supabase/client";

export const continueWithGitHub = () => {
  supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${window.location.origin}${AUTH_ROUTES.callback}`
    }
  });
};

import { redirect } from "next/navigation";
import { AUTH_ROUTES, DASHBOARD_ROUTES } from "@/constants";
import { readUserSession } from "@/lib/application";

// TODO: Create home page

export default async function Home() {
  // redirect to dashboard if user is logged
  const { data } = await readUserSession();

  if (data.session) {
    return redirect(DASHBOARD_ROUTES.dashboard);
  } else {
    // redirect to sign in if user is not logged while the homepage is being built
    return redirect(AUTH_ROUTES.signIn);
  }

  return (
    <h1 className="grid min-h-dvh place-items-center text-6xl">
      Welcome to TechCraftCV! 😃
    </h1>
  );
}

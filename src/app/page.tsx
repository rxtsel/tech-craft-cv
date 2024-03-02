import { redirect } from "next/navigation";
import { AUTH_ROUTES } from "@/constants";

// TODO: Create home page

export default function Home() {
  redirect(AUTH_ROUTES.signIn);

  return (
    <h1 className="grid min-h-dvh place-items-center text-6xl">
      Welcome to TechCraftCV! 😃
    </h1>
  );
}

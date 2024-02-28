import { navigateToSignIn } from "@/utils";
import { redirect } from "next/navigation";

// TODO: Create home page

export default function Home() {
  redirect(navigateToSignIn());

  return (
    <h1 className="grid min-h-dvh place-items-center text-6xl">
      Welcome to TechCraftCV! 😃
    </h1>
  );
}

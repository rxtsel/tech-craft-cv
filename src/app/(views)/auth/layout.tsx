import { Footer } from "@/components";
import { DASHBOARD_ROUTES } from "@/constants";
import { readUserSession } from "@/lib/application";
import { redirect } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = async ({ children }) => {
  // redirect to dashboard if user is logged
  const { data } = await readUserSession();

  if (data.session) return redirect(DASHBOARD_ROUTES.dashboard);

  return (
    <>
      <main className="grid min-h-[calc(100dvh-28px)] place-items-center sm:min-h-[calc(100dvh-36px)]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default AuthLayout;

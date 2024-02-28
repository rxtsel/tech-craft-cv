import { Footer } from "@/components";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
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

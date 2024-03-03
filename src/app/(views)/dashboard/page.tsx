import { AUTH_ROUTES } from "@/constants";
import { readUserSession } from "@/lib/application";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = async () => {
  // redirect to dashboard if user is logged
  const { data } = await readUserSession();

  if (!data.session) return redirect(AUTH_ROUTES.signIn);
  return (
    <>
      <div>Dashboard</div>
    </>
  );
};

export default Dashboard;

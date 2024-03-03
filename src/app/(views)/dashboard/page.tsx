"use client";

import { Button } from "@/components";
import { signOut } from "@/repository";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <SignOut />
    </>
  );
};

export default Dashboard;

const SignOut = () => {
  return (
    <form action={signOut}>
      <Button>Sign out</Button>
    </form>
  );
};

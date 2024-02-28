import { AuthRoutes, DashboardRoutes, MainRoutes } from "@/models";

export const MAIN_ROUTES: MainRoutes = {
  home: "/",
  notFound: "*"
};

export const AUTH_ROUTES: AuthRoutes = {
  auth: "/auth",
  signIn: "/auth/signin",
  signUp: "/auth/signup"
};

export const DASHBOARD_ROUTES: DashboardRoutes = {
  dashboard: "/dashboard"
};

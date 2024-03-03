export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://tech-craft-cv.vercel.app";

export const MAIN_ROUTES = {
  home: "/",
  notFound: "*"
};

export const AUTH_ROUTES = {
  auth: "/auth",
  callback: "/auth/callback",
  signIn: "/auth/signin",
  signUp: "/auth/signup"
};

export const DASHBOARD_ROUTES = {
  dashboard: "/dashboard"
};

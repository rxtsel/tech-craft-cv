import { AUTH_ROUTES, DASHBOARD_ROUTES, MAIN_ROUTES } from "@/constants";
import { RoutesType } from "@/models";

export const getRoutes = (routeName: RoutesType) => {
  const routes = {
    ...MAIN_ROUTES,
    ...AUTH_ROUTES,
    ...DASHBOARD_ROUTES
  };

  return routes[routeName];
};

// Get Auth Routes
export const navigateToSignIn = () => getRoutes("signIn");
export const navigateToSignUp = () => getRoutes("signUp");

// Get Main Routes
export const navigateToHome = () => getRoutes("home");
export const navigateToNotFound = () => getRoutes("notFound");

// Get Dashboard Routes
export const navigateToDashboard = () => getRoutes("dashboard");

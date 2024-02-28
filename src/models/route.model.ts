export interface MainRoutes {
  home: string;
  notFound: string;
}

export interface AuthRoutes {
  auth: string;
  signIn: string;
  signUp: string;
}

export interface DashboardRoutes {
  dashboard: string;
}

export interface Routes {
  auth: AuthRoutes;
  main: MainRoutes;
  dashboard: DashboardRoutes;
}

export type RoutesType =
  | keyof Routes["auth"]
  | keyof Routes["main"]
  | keyof Routes["dashboard"];

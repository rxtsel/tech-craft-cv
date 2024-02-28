// import { HomePageView } from "./homepage.view";
import { navigateToSignIn } from "@/utils";
import { Navigate } from "react-router-dom";

// TODO: Create HomePage

export const HomePageContainer = () => {
  return <Navigate to={navigateToSignIn()} />;
  // return <HomePageView />;
};

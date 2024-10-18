import HomeScreen from "@/screens/home/Home";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../screens/error/Error";
import LoginScreen from "../screens/login/Login";
import RegisterScreen from "../screens/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/login",
    element: <LoginScreen />
  },
  {
    path: "/register",
    element: <RegisterScreen />
  },
  {
    path: "/home",
    element: <HomeScreen />,
  },
  {
    path: "*",
    element: <ErrorPage />
  },
]);

export default router;
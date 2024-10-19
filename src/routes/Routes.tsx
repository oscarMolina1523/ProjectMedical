import ChatPage from "@/screens/home/chat/Chat";
import HomeScreen from "@/screens/home/Home";
import ProfilePage from "@/screens/home/profile/Profile";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../screens/error/Error";
import LoginScreen from "../screens/login/Login";
import RegisterScreen from "../screens/register/Register";
import PayPage from "@/screens/home/pay/Pay";
import AboutPage from "@/screens/home/about/About";

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
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
  {
    path: "/pay",
    element: <PayPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <ErrorPage />
  },
]);

export default router;
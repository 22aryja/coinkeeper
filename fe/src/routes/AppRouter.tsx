import DashboardPage from "@/pages/dashboard/DashboardPage";
import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoute from "./PublicRoute";

const LoginPage = lazy(() => import("@/pages/login/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/register/RegisterPage"));
const SettingsPage = lazy(() => import("@/pages/settings/SettingsPage"));
const StatsPage = lazy(() => import("@/pages/stats/StatsPage"));

export const AppRouter = () => {
    const privateRoutes = [
        {
            path: "/",
            element: <PrivateRoutes />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "/stats",
                    element: <StatsPage />,
                },
                {
                    path: "/settings",
                    element: <SettingsPage />,
                },
            ],
        },
    ];

    const publicRoutes = [
        {
            path: "/login",
            element: (
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
            ),
        },
        {
            path: "/register",
            element: (
                <PublicRoute>
                    <RegisterPage />
                </PublicRoute>
            ),
        },
    ];

    return useRoutes([...publicRoutes, ...privateRoutes]);
};

export default AppRouter;

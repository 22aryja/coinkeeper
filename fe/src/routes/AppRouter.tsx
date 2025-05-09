import DashboardPage from "@/pages/dashboard/DashboardPage";
import { lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";

const LoginPage = lazy(() => import("@/pages/login/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/register/RegisterPage"));
const SettingsPage = lazy(() => import("@/pages/settings/SettingsPage"));

export const AppRouter = () => {
    const routes = [
        {
            path: "/",
            element: <Outlet />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "/login",
                    element: <LoginPage />,
                },
                {
                    path: "/register",
                    element: <RegisterPage />,
                },
                {
                    path: "/settings",
                    element: <SettingsPage />,
                },
            ],
        },
    ];

    return useRoutes(routes);
};

export default AppRouter;

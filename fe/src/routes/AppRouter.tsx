import DashboardPage from "@/pages/dashboard/DashboardPage";
import { lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";

const LoginPage = lazy(() => import("@/pages/login/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/register/RegisterPage"));

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
            ],
        },
    ];

    return useRoutes(routes);
};

export default AppRouter;

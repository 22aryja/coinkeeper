import DashboardPage from "@/pages/dashboard/DashboardPage";
import { lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";

const LoginPage = lazy(() => import("@/pages/login/LoginPage"));

export const AppRouter = () => {
    const routes = [
        {
            path: "/dashboard",
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
            ],
        },
    ];

    return useRoutes(routes);
};

export default AppRouter;

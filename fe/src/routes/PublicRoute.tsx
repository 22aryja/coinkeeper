import type { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
    children: ReactNode;
}

const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
    const user: string | null = localStorage.getItem("coinkeeper-user");

    return user ? <Navigate to="/" /> : children;
};

export default PublicRoute;

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    const user: string | null = localStorage.getItem("coinkeeper-user");

    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

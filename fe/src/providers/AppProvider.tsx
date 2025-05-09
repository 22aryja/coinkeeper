import Layout from "@/components/layout/Layout";
import type { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

interface AppProviderProps {
    children: ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
    return (
        <BrowserRouter>
            <Layout>{children}</Layout>
        </BrowserRouter>
    );
};

export default AppProvider;

import Layout from "@/components/layout/Layout";
import type { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/store/store";

interface AppProviderProps {
    children: ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>{children}</Layout>
            </BrowserRouter>
        </Provider>
    );
};

export default AppProvider;

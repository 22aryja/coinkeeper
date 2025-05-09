import type { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

interface AppProviderProps {
    children: ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
    return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppProvider;

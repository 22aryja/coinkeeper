import { useMemo, type FC, type ReactNode } from "react";
import BottomBar from "./BottomBar";
import { useLocation } from "react-router-dom";

interface LayoutProps {
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    const { pathname } = useLocation();

    const user: string | null = useMemo(
        () => localStorage.getItem("coinkeeper-user"),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [pathname]
    );

    return (
        <main className="w-screen h-screen bg-accent flex flex-col justify-between">
            {children}
            {user && <BottomBar />}
        </main>
    );
};

export default Layout;

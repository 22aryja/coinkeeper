import type { FC, ReactNode } from "react";
import BottomBar from "./BottomBar";

interface LayoutProps {
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <main className="w-screen h-screen bg-accent flex flex-col justify-between">
            {children}
            <BottomBar />
        </main>
    );
};

export default Layout;

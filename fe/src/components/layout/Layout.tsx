import type { FC, ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return <main className="w-screen h-screen bg-accent">{children}</main>;
};

export default Layout;

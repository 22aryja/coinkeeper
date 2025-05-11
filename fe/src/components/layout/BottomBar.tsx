import Dashboard from "@/assets/icons/bottombar/dashboard.svg?react";
import Stats from "@/assets/icons/bottombar/stats.svg?react";
import Settings from "@/assets/icons/bottombar/settings.svg?react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

interface BottomBarSection {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    label: string;
    path: string;
}

const sections: BottomBarSection[] = [
    {
        icon: Dashboard,
        label: "Dashboard",
        path: "/",
    },
    {
        icon: Stats,
        label: "Stats",
        path: "/stats",
    },
    {
        icon: Settings,
        label: "Settings",
        path: "/settings",
    },
];

const BottomBar = () => {
    const { pathname } = useLocation();

    const isSelected = (path: string): boolean => {
        return pathname === path;
    };

    return (
        <section className="bg-accent-foreground p-4 grid grid-cols-3 justify-items-center">
            {sections.map((section: BottomBarSection) => (
                <Link
                    to={section.path}
                    className="flex flex-col gap-2 items-center"
                    key={section.path}
                >
                    <section.icon className="w-6 h-6 text-white" />
                    <span
                        className={cn(
                            "text-white font-semibold text-base",
                            isSelected(section.path) &&
                                "border-b border-solid border-white"
                        )}
                    >
                        {section.label}
                    </span>
                </Link>
            ))}
        </section>
    );
};

export default BottomBar;

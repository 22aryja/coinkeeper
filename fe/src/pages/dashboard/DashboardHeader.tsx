import { useMemo } from "react";

interface HeaderSection {
    label: string;
    value: number;
}

export const DashboardHeader = () => {
    const sections: HeaderSection[] = useMemo(
        () => [
            {
                label: "Income",
                value: 1025,
            },
            {
                label: "Balance",
                value: 1000,
            },
            {
                label: "Outcome",
                value: 750,
            },
        ],
        []
    );

    return (
        <header className="flex w-full rounded-b-4xl justify-around border shadow-2xs bg-accent-foreground p-2">
            {sections.map(({ label, value }: HeaderSection) => (
                <div key={label} className="flex flex-col gap-2 items-center">
                    <h1 className="text-accent text-lg font-semibold">
                        {label}
                    </h1>
                    <span className="text-accent font-medium">{value}</span>
                </div>
            ))}
        </header>
    );
};

export default DashboardHeader;

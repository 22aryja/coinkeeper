import { Calendar } from "@/components/ui/calendar";
import type { ChartData } from "@/types/common";
import { useEffect, useMemo, useState, type ReactElement } from "react";
import BarChartStats from "./components/BarChartStats";
import PieChartStats from "./components/PieChartStats";
import PopoverWindow from "@/components/mod-ui/PopoverWindow";
import type { DateRange } from "react-day-picker";
import { api } from "@/requests/requests";
import type { Stats } from "@/types/stats";

// const data: ChartData[] = [
//     { category: "Travel", value: 12000 },
//     { category: "Entertainment", value: 3000 },
//     { category: "Taxi", value: 1500 },
//     { category: "Education", value: 15500 },
//     { category: "Donation", value: 5000 },
// ];

interface Chart {
    chart: ReactElement;
    label: string;
}

const StatsPage = () => {
    const [range, setRange] = useState<DateRange | undefined>({
        from: new Date(),
        to: new Date(),
    });
    const [stats, setStats] = useState<Stats[]>([]);

    useEffect(() => {
        getStats();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const formatDate = (date: Date): string => {
        return date.toISOString().split("T")[0];
    };

    const getStats = async () => {
        if (range && range.from && range.to) {
            const stats: Stats[] = await api.getStats({
                start: formatDate(range.from),
                end: formatDate(range.to),
            });
            setStats(stats);
        }
    };

    const handleSelect = (date: DateRange | undefined) => {
        setRange(date);
    };

    const charts: Chart[] = useMemo(
        () => [
            {
                chart: <BarChartStats data={stats} />,
                label: "Bar chart",
            },
            {
                chart: <PieChartStats data={stats} />,
                label: "Pie chart",
            },
        ],
        [stats]
    );

    return (
        <section className="w-full h-full flex flex-col p-4 gap-8">
            <h1 className="text-center font-semibold text-2xl">Analytics</h1>
            <div className="flex wfull lg:w-64">
                <PopoverWindow
                    trigger={
                        <div className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none justify-center">
                            {range
                                ? `${range.from?.toLocaleDateString()} - ${range.to?.toLocaleDateString()}`
                                : ""}
                        </div>
                    }
                >
                    <Calendar
                        mode="range"
                        defaultMonth={range?.from}
                        selected={range}
                        onSelect={handleSelect}
                    />
                </PopoverWindow>
            </div>
            {stats.length !== 0 ? (
                <div className="flex flex-col gap-4 w-full max-w-[calc(100%-1rem)] max-h-[calc(100%-2rem)] overflow-y-auto lg:grid lg:grid-cols-2">
                    {charts.map((item: Chart) => (
                        <div
                            className="flex flex-col gap-2 w-full items-center"
                            key={item.label}
                        >
                            <h2 className="font-medium text-base">
                                {item.label}
                            </h2>
                            {item.chart}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="w-full text-xl lg:text-4xl text-center font-medium">
                    There is nothing to show...
                </div>
            )}
        </section>
    );
};

export default StatsPage;

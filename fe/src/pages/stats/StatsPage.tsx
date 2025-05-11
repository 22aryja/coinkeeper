import type { ChartData } from "@/types/common";
import BarChartStats from "./components/BarChartStats";
import PieChartStats from "./components/PieChartStats";
import type { ReactElement } from "react";

const data: ChartData[] = [
    { category: "Travel", value: 12000 },
    { category: "Entertainment", value: 3000 },
    { category: "Taxi", value: 1500 },
    { category: "Education", value: 15500 },
    { category: "Donation", value: 5000 },
];

interface Chart {
    chart: ReactElement;
    label: string;
}

const charts: Chart[] = [
    {
        chart: <BarChartStats data={data} />,
        label: "Bar chart",
    },
    {
        chart: <PieChartStats data={data} />,
        label: "Pie chart",
    },
];

const StatsPage = () => {
    return (
        <section className="w-full h-full flex flex-col p-4 gap-8">
            <h1 className="text-center font-semibold text-2xl">Analytics</h1>
            <div className="flex flex-col gap-4 w-full max-w-[calc(100%-1rem)] max-h-[calc(100%-2rem)] overflow-y-auto lg:grid lg:grid-cols-2">
                {charts.map((item: Chart) => (
                    <div
                        className="flex flex-col gap-2 w-full"
                        key={item.label}
                    >
                        <h2 className="font-medium text-base">{item.label}</h2>
                        {item.chart}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsPage;

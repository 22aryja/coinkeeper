import type { ChartConfig } from "@/components/ui/chart";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import type { ChartData } from "@/types/common";
import { useMemo, type FC } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

interface BarChartStatsProps {
    data: ChartData[];
}

const colorPalette = [
    "hsl(var(--color-chart-1))",
    "hsl(var(--color-chart-2))",
    "hsl(var(--color-chart-3))",
    "hsl(var(--color-chart-4))",
    "hsl(var(--color-chart-5))",
];

const configureData = (data: ChartData[]): ChartConfig => {
    const config: ChartConfig = {};

    data.forEach((item, index) => {
        config[item.category] = {
            label: item.category,
            color: colorPalette[index % colorPalette.length],
        };
    });

    return config;
};

const BarChartStats: FC<BarChartStatsProps> = ({ data }) => {
    const config = useMemo(
        () => configureData(data) satisfies ChartConfig,
        [data]
    );

    return (
        <ChartContainer
            config={config}
            className="min-h-[100px] w-full max-w-xl border border-solid border-border rounded-2xl p-4"
        >
            <BarChart accessibilityLayer data={data}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                    dataKey="value"
                    radius={4}
                    fill={"var(--color-foreground)"}
                />
            </BarChart>
        </ChartContainer>
    );
};

export default BarChartStats;

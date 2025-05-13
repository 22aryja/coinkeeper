import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart";
import type { ChartData } from "@/types/common";
import type { Stats } from "@/types/stats";
import { useMemo, type FC } from "react";
import { Cell, Pie, PieChart } from "recharts";

interface PieChartStatsProps {
    data: Stats[];
}

const colorPalette = [
    "hsl(var(--color-chart-1))",
    "hsl(var(--color-chart-2))",
    "hsl(var(--color-chart-3))",
    "hsl(var(--color-chart-4))",
    "hsl(var(--color-chart-5))",
];

const configureData = (data: Stats[]): ChartConfig => {
    const config: ChartConfig = {};

    data.forEach((item, index) => {
        config[item.category] = {
            label: item.category,
            color: colorPalette[index % colorPalette.length],
        };
    });

    return config;
};

const PieChartStats: FC<PieChartStatsProps> = ({ data }) => {
    const config = useMemo(() => configureData(data), [data]);

    return (
        <ChartContainer
            config={config}
            className="min-h-[300px] w-full max-w-xl border border-border rounded-2xl p-4"
        >
            <PieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={
                                config[entry.category]?.color ??
                                "hsl(var(--color-foreground))"
                            }
                        />
                    ))}
                </Pie>
            </PieChart>
        </ChartContainer>
    );
};

export default PieChartStats;

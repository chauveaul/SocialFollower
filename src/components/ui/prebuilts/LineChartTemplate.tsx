import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";

//NOTE: Might need ChartConfig for the gradient color of the line
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type LineChartProps = {
  chartData: Object[];
  xDataKey: string;
  yDataKey: string;
  className?: string;
};

const chartConfig = {
  impressions: {
    label: "Impressions",
    //color: "linear-gradient(to right, #, #)",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function LineChartTemplate({
  chartData,
  xDataKey,
  yDataKey,
  className,
}: LineChartProps) {
  //TODO: Make LinkedIn API service in lib/....
  //TODO: Fetch the data on load?? Or maybe store in db and check for change??

  return (
    <ChartContainer config={chartConfig} className={className}>
      <LineChart
        data={chartData}
        margin={{ left: -20, right: 20, top: 20, bottom: 20 }}
      >
        <defs>
          <linearGradient id="chartStroke" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#ff6900" stopOpacity={1} />
            <stop offset="100%" stopColor="#ff2056" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="rgba(255, 255, 255, 0.1)" />
        <XAxis
          dataKey={xDataKey}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          dataKey={yDataKey}
          tickMargin={8}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey={yDataKey}
          type="natural"
          stroke="url(#chartStroke)"
          fill="url(#chartStroke)"
          strokeWidth={4}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}

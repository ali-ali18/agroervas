import { useTheme } from "@/components/themeProvider/themeProvider";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	XAxis,
    YAxis,
} from "recharts";
import { chartConfig, chartData } from "../utils/ContentTabela";



export function Chart() {
	const { theme } = useTheme();



    const aumentoClientes = ((chartData[chartData.length - 1].Clientes - chartData[0].Clientes) / chartData[0].Clientes) * 100


	return (
		<Card className="w-full max-w-full">
			<CardHeader>
				<CardTitle className="text-2xl font-bold">Clientes atendidos em determinado período</CardTitle>
                <CardDescription>
                    <div>
                        <span className="text-2xl font-bold text-black dark:text-white">{aumentoClientes.toFixed(2)}%</span>
                        <p className="text-sm text-muted-foreground">Aumento de clientes em relação ao período anterior</p>
                    </div>
                </CardDescription>
			</CardHeader>

			<CardContent>
				<ChartContainer
					config={chartConfig}
					className="min-h-[300px] max-w-full"
				>
					<ResponsiveContainer width="100%" height="100%">
						<BarChart accessibilityLayer data={chartData}>
							<CartesianGrid vertical={false} />
							<XAxis
								dataKey="month"
								tickLine={false}
								tickMargin={10}
								axisLine={false}
								tickFormatter={(value) => value.slice(0, 3)}
							/>
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => value.toLocaleString()}
                            />
							<ChartTooltip content={<ChartTooltipContent />} />


							<Bar
								dataKey="Clientes"
								fill={
									chartConfig.data.theme[theme === "dark" ? "dark" : "light"]
								}
								radius={4}
							/>
						</BarChart>
					</ResponsiveContainer>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}

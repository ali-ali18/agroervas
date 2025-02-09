interface ChartDataProps {
    month: string;
    Clientes: number;
}

export const chartData: ChartDataProps[] = [

	{
		month: "Julho",
		Clientes: 170,

	},
	{
		month: "Agosto",
		Clientes: 202,
	},


	{
		month: "Setembro",
		Clientes: 287,
	},

	{
		month: "Outubro",
		Clientes: 331,
	},

	{
		month: "Novembro",
		Clientes: 345,
	},

	{
		month: "Dezembro",
		Clientes: 430,
	},

];

export const chartConfig = {
	data: {
		label: "Clientes",
		theme: {
			dark: "#ffffff",
			light: "#2563eb",
		},
	},
};
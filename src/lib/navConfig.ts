import type { navConfigProps } from "@/Interfaces/navConfig";

const navConfig: navConfigProps[] = [
	{
		label: "Home",
		path: "/",
		description:
			"Bem-vindo à nossa página inicial, onde você encontra uma visão geral do site.",
	},
	{
		label: "Sobre",
		path: "/about",
		description: "Saiba mais sobre nossa equipe, nossa missão e valores.",
	},
	{
		label: "Contato",
		path: "/contact",
		description: "Entre em contato conosco para suporte, dúvidas ou sugestões.",
	},

	// {
	// 	label: "História",
	// 	path: "/history",
	// 	description:
	// 		"Descubra a trajetória da nossa empresa e os marcos importantes ao longo dos anos.",
	// },

	{
		label: "Entrega",
		path: "/delivery",
		description:
			"Informações sobre modalidades de entrega, prazos e regiões atendidas.",
	},
	{
		label: "Pagamentos",
		path: "/payments",
		description:
			"Informações sobre modalidades de pagamento, prazos e regiões atendidas.",
	},

];

export default navConfig;

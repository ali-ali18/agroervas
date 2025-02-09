interface ItemCardApresentacao {
    id: number; 
    name: string;
    designation: string;
    content: string;
}

export const items: ItemCardApresentacao[] = [

	{
		id: 1,
		name: "João da Silva", 
		designation: "CEO", 
		content:
			"A Agroervas elevou a qualidade dos nossos produtos com ingredientes naturais excepcionais.",
	},
	{
		id: 2, 
		name: "Maria Oliveira",
		designation: "Diretora de Marketing",
		content:
			"Excelente experiência com a empresa, produtos de alta qualidade e suporte impecável.",
	},
	{
		id: 3,
		name: "Carlos Souza",
		designation: "Gerente de Operações",
		content:
			"Serviço excepcional, recomendo para qualquer empresa que valoriza ingredientes naturais.",
	},
	{
		id: 4,
		name: "Ana Martins",
		designation: "Empreendedora",
		content:
			"Fiquei impressionada com a atenção ao cliente e os resultados incríveis dos produtos.",
	},
];

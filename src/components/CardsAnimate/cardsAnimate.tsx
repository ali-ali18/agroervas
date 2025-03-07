import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";

const reviews = [
    {
        name: "Dra. Mariana Luz",
        cargo: "Diretora de Pesquisa",
        body: "Eu já testei várias marcas, mas o frescor das ervas daqui é outro nível. A entrega é rápida, e a qualidade é imbatível.",
		img: "https://avatar.vercel.sh/mariana"

    },
    {
        name: "Carlos Ribeiro",
        cargo: "Gerente de Exportação",
        body: "Um cliente gringo ficou surpreso com o prazo de poucos dias e, quando provou, virou fã. Agora ele indica pra todo mundo!",
		img: "https://avatar.vercel.sh/Carlos"
    },
    {
        name: "Ana Beatriz Costa",
        cargo: "Desenvolvedora de Produtos",
        body: "Pedi uma erva específica pra um projeto, e em poucos dias chegou com um sabor tão puro que o produto final ficou perfeito. Os clientes notam a diferença.",
		img: "https://avatar.vercel.sh/ana"
    },
    {
        name: "Dr. Renato Meirelles",
        cargo: "Coordenador Industrial",
        body: "A consistência é impressionante. Nunca tive uma reclamação, e a entrega sob demanda chega no tempo certo pra garantir a qualidade.",
		img: "https://avatar.vercel.sh/renato"
    },
    {
        name: "Fernanda Moura",
        cargo: "Compradora",
        body: "Eles fazem tudo sob medida, então planejo com antecedência. Quando chega, é sempre melhor do que eu imaginava. Os consumidores adoram!",
		img: "https://avatar.vercel.sh/fernanda"
    },
    {
        name: "Ricardo Porto",
        cargo: "Diretor",
        body: "Tínhamos problemas com variações sazonais, mas o fornecimento sob demanda resolveu. A qualidade é tão alta que os clientes nem percebem os poucos dias de espera.",
		img: "https://avatar.vercel.sh/ricardo"
    },
    {
        name: "Juliana Tavares",
        cargo: "Especialista em Supply Chain",
        body: "O processo sob demanda me permite gerenciar o estoque com precisão. Em menos de uma semana, tenho um produto excepcional, e o feedback é sempre positivo.",
		img: "https://avatar.vercel.sh/juliana"
    },
    {
        name: "Lucas Henrique",
        cargo: "Chef Executivo",
        body: "Pedi uma erva pra um evento especial, e o aroma era tão intenso que os convidados não paravam de elogiar. Chegou bem a tempo!",
		img: "https://avatar.vercel.sh/lucas"
    },
    {
        name: "Amanda Reis",
        cargo: "Responsável por Compras",
        body: "Eles me explicam cada detalhe do processo, e eu sinto que faço parte. Em poucos dias, recebo algo excepcional que faz toda a diferença.",
		img: "https://avatar.vercel.sh/amanda"
    },
    {
        name: "Roberto Campos",
        cargo: "Diretor de Operações",
        body: "Com a demanda crescendo, achava que a qualidade ia cair, mas não. Os clientes adoram o resultado e nem ligam pros poucos dias de preparo.",
		img: "https://avatar.vercel.sh/roberto"
    }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);


const ReviewCard = ({
	img,
	name,
	cargo,
	body,
}: {
	img: string;
	name: string;
	cargo: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				"relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<img className="rounded-full" width="32" height="32" alt="" src={img} />
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>
					<p className="text-xs font-medium dark:text-white/40">{cargo}</p>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{body}</blockquote>
		</figure>
	);
};

export default function CardsAnimate() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden max-w-7xl mx-auto">
			<Marquee pauseOnHover className="[--duration:25s]">
				{firstRow.map((review) => (
					<ReviewCard key={review.cargo} {...review} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:25s]">
				{secondRow.map((review) => (
					<ReviewCard key={review.cargo} {...review} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"/>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"/>
		</div>
	);
}

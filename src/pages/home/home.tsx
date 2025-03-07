import AnimatedContainer from "@/components/AnimatedContainer/animatedContainer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { ContainerSpacing } from "../../components/containerSpacing/containerSpacing";
import { FlipWords } from "./components/flipWord";
import ContentVantagens from "./utils/ContentVantagens";
import { Button } from "@/components/ui/button";
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import CardsAnimate from "@/components/CardsAnimate/cardsAnimate";
import { lazy, Suspense, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Apresentacao } from "./components/apresentacao";
import CarroselProducts from "./components/carrosel/carrosel";
import { nossosProducts } from "@/db/nossosProducts";

const GridBackgroundDemo = lazy(() =>
	import("@/components/GridBackground/GridBackground").then((module) => ({
		default: module.GridBackgroundDemo,
	})),
);

const AnimatedBeamMultipleOutputDemo = lazy(() =>
	import("@/components/LigacaoImpresas/ligacaoEmpresas").then((module) => ({
		default: module.AnimatedBeamMultipleOutputDemo,
	})),
);

const LayoutWobbleCards = lazy(() =>
	import("./components/wobbleCards/layout").then((module) => ({
		default: module.LayoutWobbleCards,
	})),
);

export default function Home() {
	return (
		<div className="overflow-hidden">
			<Helmet>
				<title>
					Agroervas | Cresça seu negócio com produtos sob demanda de alta
					qualidade
				</title>
				<meta
					name="description"
					content="Conheça nossos processos sob demanda e garanta produtos sempre frescos e seguros para o seu negócio. A Agroervas é a parceira ideal para o seu crescimento."
				/>
				<meta
					name="keywords"
					content="Agroervas, Pagina Inicial, Agroervas Pagina Inicial"
				/>
				<meta name="author" content="Agroervas" />
				<meta name="robots" content="index, follow" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#000000" />
				<meta name="msapplication-navbutton-color" content="#000000" />
				<meta name="apple-mobile-web-app-capable" content="yes" />

				<meta
					property="og:title"
					content="Agroervas | Cresça seu negócio com produtos sob demanda de alta
qualidade"
				/>
				<meta
					property="og:description"
					content="Conheça nossos processos sob demanda e garanta produtos sempre frescos e seguros para o seu negócio. A Agroervas é a parceira ideal para o seu crescimento."
				/>
				<meta property="og:url" content="https://agroervas.com.br" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Agroervas" />
			</Helmet>

			{/* Inicio da apresentação */}
			<ContainerSpacing>
				<div className="flex flex-col items-center justify-center gap-4 sm:py-10 ">
					<Apresentacao />
				</div>
			</ContainerSpacing>

			<div className="flex flex-col items-center mb-11 justify-center">
				<CarroselProducts setter={nossosProducts} />
				<p className="text-muted-foreground text-center flex items-center justify-center mt-4 md:hidden">
					Puxe ao lado para mais produtos <ArrowRight size={18} />
				</p>
			</div>
			
			<CardsAnimate />

			{/* Vantagens chamativa */}
			<motion.div
				whileInView="visible"
				viewport={{ once: true, amount: 0.6 }}
				initial="hidden"
				className="py-8 md:py-10"
			>
				<Suspense
					fallback={
						<div className="flex items-center justify-center">
							<Skeleton className="h-[400px] w-full" />
						</div>
					}
				>
					<GridBackgroundDemo height="35rem">
						<h1 className="text-center text-wrap">
							Transformando <br />{" "}
							<FlipWords className="" words={ContentVantagens} /> <br />
							com qualidade e confiança
						</h1>
					</GridBackgroundDemo>
				</Suspense>
			</motion.div>
			{/* Gráfico */}
			<AnimatedContainer />

			<motion.div
				className="overflow-hidden"
				initial={{ opacity: 0, x: 100 }}
				viewport={{ once: true, amount: 0.6 }}
				whileInView={{ opacity: 1, x: 0, scale: 1 }}
				transition={{ duration: 1.2, delay: 0.2 }}
			>
				<ContainerSpacing>
					<div className="">
						<h1 className="text-2xl md:text-4xl font-bold">
							Soluções completas para o seu negócio
						</h1>
						<p className="text-muted-foreground my-4">
							Na Agroervas, oferecemos ervas e especiarias de alta qualidade,
							diretamente do produtor para o seu negócio. Com preços
							competitivos, entrega ágil e um portfólio diversificado, somos o
							parceiro ideal para atender às demandas do mercado B2B. Conte
							conosco para impulsionar seus resultados com produtos premium e um
							serviço personalizado.
						</p>
					</div>
					<Button asChild size={"lg"} variant={"outline"}>
						<a
							href="https://wa.me/554191244175"
							className="flex items-center gap-2 font-bold"
							rel="noopener noreferrer"
							target="__blank"
						>
							Conversar com um especilista <SquareArrowOutUpRight />
						</a>
					</Button>
				</ContainerSpacing>
				<Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
					<AnimatedBeamMultipleOutputDemo />
				</Suspense>
			</motion.div>

			<div className="py-1 w-full">
				<Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
					<LayoutWobbleCards />
				</Suspense>
			</div>
		</div>
	);
}

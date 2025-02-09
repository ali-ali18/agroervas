import { ColourfulText } from "@/components/ColorText/ColorText";
import { GridBackgroundDemo } from "@/components/GridBackground/GridBackground";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ContainerSpacing } from "../../components/containerSpacing/containerSpacing";
import { CardStack } from "./components/CardApresentacao";
import { Apresentacao } from "./components/apresentacao";
import { Chart } from "./components/chart";
import { FlipWords } from "./components/flipWord";
import ContentVantagens from "./utils/ContentVantagens";
import { items } from "./utils/ItemsCardApresentacao";
import { LayoutWobbleCards } from "./components/wobbleCards/layout";
import EfeitoMotion from "./components/efeitoMotion";
import { Helmet } from "react-helmet";

export default function Home() {
	return (
		<div>
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
				<EfeitoMotion initial={{ opacity: 0, x: 100 }} duration={1.2}>
					<div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:py-10 ">
						<Apresentacao />
						<CardStack items={items} />
					</div>
				</EfeitoMotion>
			</ContainerSpacing>

			{/* Vantagens chamativa */}
			<div className="py-8 md:py-10">
				<GridBackgroundDemo height="35rem">
					<h1 className="text-center text-wrap">
						Transformando <br />{" "}
						<FlipWords className="" words={ContentVantagens} /> <br />
						com qualidade e confiança
					</h1>
				</GridBackgroundDemo>
			</div>

			<ContainerSpacing>
				<div className="flex flex-col xl:flex-row gap-6">
					<div className="flex flex-col gap-3 md:gap-4 flex-1">
						<h2 className="font-bold text-3xl text- md:text-4xl">
							Empresas que confiam no nosso modelo sob demanda continuam
							<br />
							<ColourfulText text="crescendo" />
						</h2>
						<p className="text-muted-foreground">
							Nos últimos meses, mais negócios têm apostado na qualidade
							garantida de um processo feito sob demanda. Produzimos e
							classificamos cada pedido após a sua confirmação, garantindo
							produtos sempre frescos e prontos para o mercado. Junte-se a quem
							já está crescendo com a gente!
						</p>
						<div className="flex flex-col lg:flex-row gap-2 md:gap-4">
							<Button
								asChild
								className="rounded-lg font-bold"
								variant={"outline"}
								size={"lg"}
							>
								<a href="https://wa.me/554191244175">
									Conversar com um especialista <SquareArrowOutUpRight />
								</a>
							</Button>
							<Button
								asChild
								className="rounded-lg font-bold"
								variant={"ghost"}
								size={"lg"}
							>
								<Link to="/history">Nossa história</Link>
							</Button>
						</div>
					</div>
					<div className="flex flex-1 max-w-full px-0 lg:px-12 xl:px-0">
						<Chart />
					</div>
				</div>
			</ContainerSpacing>
			<div className="py-10 w-full">
				<LayoutWobbleCards />
			</div>
		</div>
	);
}

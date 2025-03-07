import { ContainerSpacing } from "@/components/containerSpacing/containerSpacing";
import { TracingBeam } from "./components/tracing-beam";
import ContentAbout from "./components/contentAbout";
import { contentAboutDb } from "./utils/contentAboutDb";
import type { ContentAboutProps } from "@/Interfaces/contentAboutProps";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GridBackgroundDemo } from "@/components/GridBackground/GridBackground";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";

export default function About() {
	return (
		<div className="flex flex-col">
			<Helmet>
				<title>Agroervas | Sobre nós</title>
				<meta
					name="description"
					content="Saiba mais sobre a Agroervas e como podemos ajudar o seu negócio!"
				/>
				<meta name="author" content="Agroervas" />
				<meta name="robots" content="index, follow" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#000000" />
				<meta name="msapplication-navbutton-color" content="#000000" />
				<meta name="apple-mobile-web-app-capable" content="yes" />

				<meta
					property="og:title"
					content="Agroervas | Cresça seu negócio com produtos sob demanda de alta qualidade"
				/>
				<meta
					property="og:description"
					content="Conheça nossos processos sob demanda e garanta produtos sempre frescos e seguros para o seu negócio. A Agroervas é a parceira ideal para o seu crescimento."
				/>
				<meta property="og:url" content="https://agroervas.com.br" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Agroervas" />
			</Helmet>
			
			<TracingBeam className="px-5 md:px-10 max-h-full">
				<ContainerSpacing>
					<div className="flex flex-col gap-4 h-auto w-full antialiased">
						<span className="text-2xl font-bold">Sobre nós</span>

						<div className="flex flex-col gap-10">
							{contentAboutDb.map(
								({ title, description, img }: ContentAboutProps) => (
									<ContentAbout
										key={title}
										title={title}
										description={description}
										img={img}
									/>
								),
							)}
						</div>
					</div>
				</ContainerSpacing>
			</TracingBeam>

			<ContainerSpacing>
				<GridBackgroundDemo height="38rem">
					<div className="flex flex-col gap-6 items-center justify-center text-center">
						<h1 className="text-3xl md:text-5xl font-bold leading-tight">
							Pronto para dar o próximo passo? <br /> Entre em contato conosco
							agora mesmo!
						</h1>
						<p className="text-muted-foreground text-lg max-w-2xl">
							Estamos aqui para tirar suas dúvidas, ouvir suas ideias e ajudar
							você a encontrar as melhores soluções para o seu negócio. Não
							deixe para depois, fale com a nossa equipe hoje mesmo!
						</p>
						<Button asChild size="lg" variant="outline">
							<Link to="/contact">
								Entre em contato <ArrowRight />
							</Link>
						</Button>
					</div>
				</GridBackgroundDemo>
			</ContainerSpacing>
		</div>
	);
}

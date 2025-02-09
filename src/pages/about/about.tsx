import { ContainerSpacing } from "@/components/containerSpacing/containerSpacing";
import { TracingBeam } from "./components/tracing-beam";
import ContentAbout from "./components/contentAbout";
import { contentAboutDb } from "./utils/contentAboutDb";
import type { ContentAboutProps } from "@/Interfaces/contentAboutProps";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GridBackgroundDemo } from "@/components/GridBackground/GridBackground";
import { ArrowRight } from "lucide-react";

export default function About() {
	return (
		<div className="flex flex-col">
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
						<Button
							asChild
							size="lg"
							variant="outline"
						>
							<Link to="/contact">Entre em contato <ArrowRight /></Link>
						</Button>

					</div>
				</GridBackgroundDemo>
			</ContainerSpacing>
		</div>
	);
}

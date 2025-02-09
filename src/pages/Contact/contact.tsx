import { ColourfulText } from "@/components/ColorText/ColorText";
import { ContainerSpacing } from "@/components/containerSpacing/containerSpacing";
import { GridBackgroundDemo } from "@/components/GridBackground/GridBackground";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Contact() {
	return (
		<GridBackgroundDemo height="90vh">
			<ContainerSpacing>
				<div className="flex flex-col gap-4 items-center justify-center text-center">
					<h1 className="">
						Converse com a gente e <br />
						<ColourfulText text="descubra novas possibilidades" />
					</h1>
					<p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
						Estamos prontos para ouvir você! Seja para tirar dúvidas, discutir
						oportunidades de parceria ou saber mais sobre nossos serviços, entre
						em contato pelos canais abaixo e fale diretamente com a nossa
						equipe.
					</p>
				</div>
				<div className="flex gap-4 justify-center my-6">
					<Button variant={"outline"} size={"lg"} asChild>
						<a
							href="https://wa.me/554191244175"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 font-bold"
						>
							Falar no WhatsApp <ExternalLink />
						</a>
					</Button>
					<Button variant={"outline"} size={"lg"} asChild>
						<a
							href="mailto:dacsan@agroervas.com.br"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 font-bold"
						>
							Enviar um Email <ExternalLink />
						</a>
					</Button>
				</div>
			</ContainerSpacing>
		</GridBackgroundDemo>
	);
}

import { ColourfulText } from "@/components/ColorText/ColorText";
import { ContainerSpacing } from "@/components/containerSpacing/containerSpacing";
import { GridBackgroundDemo } from "@/components/GridBackground/GridBackground";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet";

export default function Contact() {
	return (
		<GridBackgroundDemo height="90vh">
			<Helmet>
				<title>Agroervas | Contato</title>
				<meta
					name="description"
					content="Entre em conctado e converse com a gente!"
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
			<ContainerSpacing>
				<div className="flex flex-col gap-4 items-center justify-center text-center">
					<h1 className="text-wrap">
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
				<div className="flex gap-4 justify-center my-6 flex-col md:flex-row">
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

import { ContainerSpacing } from "@/components/containerSpacing/containerSpacing";
import Tables from "@/components/tables/tables";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { deliveryData } from "@/db/duvidas";
import { AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet";

export default function Delivery() {
	return (
		<div className="w-full min-h-screen flex items-center justify-center">
			<Helmet>
				<title>Agroervas | Dúvidas sobre entrega</title>
				<meta
					name="description"
					content="Diversas formas de entrega disponíveis, veja quais são as melhores para o seu negócio!"
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
				<div className="w-full flex justify-center items-center">
					<Card>
						<CardHeader>
							<CardTitle className="text-xl text-center">
								Informações de entrega
							</CardTitle>
							<CardDescription className="text-base text-muted-foreground text-center">
								Confira os detalhes sobre nossos serviços de entrega, opções de
								transportadoras e prazos estimados.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="w-full flex justify-center mb-10 mt-0">
								<Alert className="md:w-1/2 w-full">
									<AlertCircle className="w-5" />
									<AlertTitle>
										As informações de entrega podem variar conforme o destino e
										a modalidade escolhida.
									</AlertTitle>
									<AlertDescription>
										Antes de finalizar seu pedido, verifique as opções
										disponíveis para sua região. O prazo de entrega é uma
										estimativa e pode sofrer alterações devido a fatores
										logísticos ou externos.
									</AlertDescription>
								</Alert>
							</div>
							<Tables
								items={deliveryData}
								info1="Transportadora"
								info2="Descrição"
							/>
						</CardContent>
					</Card>
				</div>
			</ContainerSpacing>
		</div>
	);
}

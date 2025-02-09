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

export default function Delivery() {
	return (
        <div className="w-full h-screen">
		<ContainerSpacing>
			<div className="w-full flex justify-center">
				<Card>
					<CardHeader>
						<CardTitle className="text-xl text-center">Informações de entrega</CardTitle>
						<CardDescription className="text-base text-muted-foreground text-center">
							Confira os detalhes sobre nossos serviços de entrega, opções de
							transportadoras e prazos estimados.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="w-full flex justify-center mb-10 mt-0">
							<Alert className="w-1/2">
								<AlertCircle className="w-5"/>
								<AlertTitle>
									As informações de entrega podem variar conforme o destino e a
									modalidade escolhida.
								</AlertTitle>
								<AlertDescription>
									Antes de finalizar seu pedido, verifique as opções disponíveis
									para sua região. O prazo de entrega é uma estimativa e pode
									sofrer alterações devido a fatores logísticos ou externos.
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

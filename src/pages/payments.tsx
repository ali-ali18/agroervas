import { ContainerSpacing } from "@/components/containerSpacing/containerSpacing";
import { AlertDescription } from "@/components/ui/alert";
import { AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Alert } from "@/components/ui/alert";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Tables from "@/components/tables/tables";
import { paymentData } from "@/db/duvidas";

export default function Payments() {
	return (
		<div className="w-full min-h-screen flex items-center justify-center">
			<ContainerSpacing>
				<div className="w-full flex justify-center">
					<Card>
						<CardHeader>
							<CardTitle className="text-xl text-center">
								Formas de Pagamento
							</CardTitle>
							<CardDescription className="text-base text-muted-foreground text-center">
								Conheça as opções de pagamento disponíveis para facilitar suas
								compras com segurança e praticidade.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="w-full flex justify-center mb-10 mt-0">
								<Alert className="md:w-1/2 w-full">
									<AlertCircle className="w-5" />
									<AlertTitle>
										Importante: verifique as condições de pagamento antes de
										finalizar seu pedido.
									</AlertTitle>
									<AlertDescription>
										Alguns métodos de pagamento podem ter prazos de compensação
										diferentes. Pagamentos via PIX e transferência bancária
										costumam ser confirmados mais rapidamente.
									</AlertDescription>
								</Alert>
							</div>
							<Tables
								items={paymentData}
								info1="Método de Pagamento"
								info2="Descrição"
							/>
						</CardContent>
					</Card>
				</div>
			</ContainerSpacing>
		</div>
	);
}

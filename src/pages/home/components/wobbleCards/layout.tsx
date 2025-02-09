import { Link } from "react-router-dom";
import { WobbleCard } from "./wobbleCards";
import { ContainerSpacing } from "@/components/containerSpacing/containerSpacing";

export const LayoutWobbleCards = () => {
	return (
		<ContainerSpacing>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full py-10">
				<Link
					to="/contact"
					className="h-full min-h-[300px] flex col-span-1 lg:col-span-2"
				>
					<WobbleCard containerClassName="h-full bg-pink-800 min-h-[300px] lg:min-h-[300px]">
						<div className="max-w-xs">
							<h2 className="text-left text-balance text-xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
								Entre em contato e descubra novas possibilidades
							</h2>
							<p className="mt-4 text-left text-base/6 text-neutral-200">
								Estamos prontos para ouvir você! Tire suas dúvidas, compartilhe
								suas ideias ou solicite informações detalhadas sobre nossos
								serviços. Nossa equipe está aqui para oferecer o suporte que
								você precisa, de forma rápida e eficiente.
							</p>
						</div>
					</WobbleCard>
				</Link>

				<Link to="/delivery" className="h-full min-h-[300px] flex">
					<WobbleCard containerClassName="h-full min-h-[300px]">
						<div className="max-w-xs">
							<h2 className="text-left text-balance text-xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
								Entregamos mais do que produtos, garantimos qualidade e
								segurança em cada etapa do processo
							</h2>
							<p className="mt-4 text-left text-base/6 text-neutral-200">
								Nossos produtos são preparados sob demanda e enviados com todo o
								cuidado para garantir que cheguem ao seu destino com a mesma
								qualidade da origem. Eficiência e confiabilidade em cada etapa
								da entrega.
							</p>
						</div>
					</WobbleCard>
				</Link>

				<Link
					to="/about"
					className="h-full min-h-[300px] flex col-span-1 sm:col-span-2 lg:col-span-3"
				>
					<WobbleCard containerClassName="h-full bg-blue-900 min-h-[300px] lg:min-h-[300px]">
						<div className="max-w-sm">
							<h2 className="text-left text-balance text-xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
								Descubra quem somos e o que nos motiva a seguir em frente
							</h2>
							<p className="mt-4 text-left text-base/6 text-neutral-200">
								Saiba mais sobre nossa essência, os valores que defendemos e a
								missão que nos inspira diariamente. Entenda como nossa equipe
								trabalha para criar impacto positivo e construir um futuro mais
								conectado e inovador.
							</p>
						</div>
					</WobbleCard>
				</Link>
			</div>
		</ContainerSpacing>
	);
};

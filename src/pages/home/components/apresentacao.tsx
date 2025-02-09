import { ColourfulText } from "@/components/ColorText/ColorText";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Apresentacao() {
	return (
		<div className="flex flex-col md:items-start justify-center gap-2 mt-4 md:mt-10 w-full md:w-1/2">
			<h1 className="font-bold text-3xl text- md:text-4xl w-full">
				<span className="bg-gradient-to-b from-[#17c964] to-[#6fee8d] text-transparent bg-clip-text ">
					<ColourfulText text="Agroervas" />
				</span>{" "}
				levando o melhor da natureza para o seu negócio
			</h1>

			<p className="w-full md:w-10/12 mb-2 text-muted-foreground">
				Ingredientes naturais de alta qualidade para impulsionar sua marca. Fale
				com a gente e leve o poder da natureza para os seus produtos.
			</p>
			<div className="flex flex-col gap-2 md:flex-row">
				<Button
					asChild
					size={"lg"}
					className="font-bold bg-transparent"
					variant={"outline"}
				>
					<a href="https://wa.me/554191244175">
						Conversar com um especialista <ArrowRight />
					</a>
				</Button>

				<Button
					asChild
					size={"lg"}
					className="font-bold bg-transparent hidden md:flex"
					variant={"ghost"}
				>
					<Link to="/about">Sobre nós</Link>
				</Button>
			</div>
			<div>
				
			</div>
		</div>
	);
}

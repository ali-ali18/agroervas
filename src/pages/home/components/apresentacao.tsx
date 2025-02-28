import { ColourfulText } from "@/components/ColorText/ColorText";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Apresentacao() {
	return (
		<div className="flex flex-col justify-center md:items-center gap-2 mt-4 md:mt-10 md:w-10/12 max-w-full">
			<h1 className="font-bold text-3xl md:text-center md:text-4xl w-full">
				<span className="bg-gradient-to-b from-[#17c964] to-[#6fee8d] text-transparent bg-clip-text ">
					<ColourfulText text="Agroervas" />
				</span>{" "}
				levando o melhor da natureza para o seu negócio
			</h1>

			<p className="w-full md:w-10/12 mb-2 text-muted-foreground md:text-center">
				Ingredientes naturais de alta qualidade para impulsionar sua marca. Fale
				com a gente e leve o poder da natureza para os seus produtos.
			</p>
			<div className="flex flex-col gap-2 justify-center md:items-center">
				<Button
					asChild
					size={"lg"}
					className="font-bold bg-transparent max-w-96"
					variant={"outline"}
				>
					<a href="https://wa.me/554191244175">
						Conversar com um especialista <ArrowRight />
					</a>
				</Button>

				<Button
					asChild
					size={"lg"}
					className="font-bold bg-transparent hidden md:flex max-w-96"
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

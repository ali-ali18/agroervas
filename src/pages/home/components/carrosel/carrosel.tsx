import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import type { CardProps } from "./cardProducts";
import CardProducts from "./cardProducts";
import { useEffect, useState } from "react";
import SkeletonPG from "@/components/skeletonPg/skeletonPG";

interface CarouselProps {
	setter: CardProps[];
}

export default function CarroselProducts({ setter }: CarouselProps) {
	const [loading, setLoading] = useState(true);

	function loadingFunction() {
		useEffect(() => {
			const timer = setTimeout(() => {
				setLoading(false);
			}, 3000);

			return () => clearTimeout(timer);
		}, []);
	}

    loadingFunction()

    if (loading) {
        return <SkeletonPG/>
    }

	return (
		<div className="w-full h-full mt-6 flex flex-col gap-3">
			<strong className=" text-2xl md:text-4xl capitalize text-center">
				Veja algum dos nossos produtos
			</strong>
			<Carousel
				className="max-w-7xl mx-auto"
				opts={{ loop: true, align: "center" }}
			>
				<CarouselContent className="flex items-center w-[320px] md:w-[650px] lg:w-[850px] xl:w-[1100px]">
					{setter.map((item) => (
						<CarouselItem key={item.id} className=" md:basis-1/2 xl:basis-1/3">
							<CardProducts {...item} />
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="hidden md:flex">
					<CarouselNext />
					<CarouselPrevious />
				</div>
			</Carousel>
		</div>
	);
}

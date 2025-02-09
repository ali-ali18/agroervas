"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

let interval: NodeJS.Timeout;

type CardProps = {
	id: number;
	name: string;
	designation: string;
	content: React.ReactNode;
};

export const CardStack = ({
	items,
	offset,
	scaleFactor,
}: {
	items: CardProps[];
	offset?: number;
	scaleFactor?: number;
}) => {
	const CARD_OFFSET = offset || 10;
	const SCALE_FACTOR = scaleFactor || 0.06;
	const [cards, setCards] = useState<CardProps[]>(items);

	useEffect(() => {
		startFlipping();

		return () => clearInterval(interval);
	}, []);
	const startFlipping = () => {
		interval = setInterval(() => {
			setCards((prevCards: CardProps[]) => {
				const newArray = [...prevCards];
				const lastCard = newArray.pop();
				if (lastCard) {
					newArray.unshift(lastCard);
				}
				return newArray;
			});
		}, 5000);
	};

	return (
		<div className="relative max-w-xs h-60 w-60 md:h-60 md:w-96 mt-10 md:mt-4 mb-20 md:mb-0">
			{cards.map((card, index) => {
				return (
					<motion.div

						key={card.id}
						className="absolute dark:bg-black bg-white h-72 w-60 md:h-56 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
						style={{
							transformOrigin: "top center",
						}}
						animate={{
							top: index * -CARD_OFFSET,
							scale: 1 - index * SCALE_FACTOR,
							zIndex: cards.length - index,
						}}
					>
						<Card>
							<CardHeader>
								<CardTitle>{card.name}</CardTitle>
								<CardDescription>{card.designation}</CardDescription>
							</CardHeader>
							<CardContent>{card.content}</CardContent>
						</Card>
					</motion.div>
				);
			})}
		</div>
	);
};

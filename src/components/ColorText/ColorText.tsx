"use client";
import { motion } from "motion/react";
import React from "react";

export function ColourfulText({ text }: { text: string }) {
	const colors = [
		"rgb(173, 255, 47)",
		"rgb(124, 252, 0)",
		"rgb(50, 205, 50)",
		"rgb(34, 139, 34)",
		"rgb(0, 128, 0)",
		"rgb(60, 179, 113)",
		"rgb(46, 139, 87)",
	];

	const [currentColors, setCurrentColors] = React.useState(colors);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		const interval = setInterval(() => {
			const shuffled = [...colors].sort(() => Math.random() - 0.5);
			setCurrentColors(shuffled);
			setCount((prev) => prev + 1);
		}, 8000);

		return () => clearInterval(interval);
	}, []);

	return text.split("").map((char, index) => (
		<motion.span
			key={`${char}-${count}-${Math.random()}`}
			initial={{
				y: 0,
			}}
			animate={{
				color: currentColors[index % currentColors.length],
				y: [0, -3, 0],
				scale: [1, 1.01, 1],
				filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
				opacity: [1, 0.8, 1],
			}}
			transition={{
				duration: 0.5,
				delay: index * 0.05,
			}}
			className="inline-block whitespace-pre font-sans tracking-tight"
		>
			{char}
		</motion.span>
	));
}

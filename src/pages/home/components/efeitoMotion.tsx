import { motion } from "framer-motion";

type initial = {
	opacity: number;
	x?: number;
	y?: number;
};

interface EfeitoMotionProps {
	children: React.ReactNode;
	initial: initial;
	duration: number;
}

export default function EfeitoMotion({
	children,
	initial,
	duration,
}: EfeitoMotionProps) {


	return (
		<motion.section
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			initial={initial}
			animate={{ opacity: 1, y: 0, x: 0 }}
			transition={{ duration: duration }}
			className="w-full flex justify-center items-center m-0"
		>
			{children}
		</motion.section>
	);
}

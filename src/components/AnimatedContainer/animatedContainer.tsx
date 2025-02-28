import { motion } from "framer-motion";
import { ContainerSpacing } from "../containerSpacing/containerSpacing";
import { ColourfulText } from "../ColorText/ColorText";
import { Button } from "../ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Chart } from "@/pages/home/components/chart";

export default function AnimatedContainer() {
	const containerVariants = {
		hidden: { opacity: 1, scale: 1 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.5,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			whileInView='visible'
			viewport={{ once: true, amount: 0.2 }}
			className="w-full flex justify-center items-center m-0"
		>
			<ContainerSpacing>
				<motion.div
					className="flex flex-col xl:flex-row gap-6"
					variants={itemVariants}
				>
					<motion.div
						className="flex flex-col gap-3 md:gap-4 flex-1"
						variants={itemVariants}
					>
						<motion.h2
							className="font-bold text-3xl md:text-4xl"
							variants={itemVariants}
						>
							Empresas que confiam no nosso modelo sob demanda continuam
							<br />
							<ColourfulText text="crescendo" />
						</motion.h2>
						<motion.p className="text-muted-foreground" variants={itemVariants}>
							Nos últimos meses, mais negócios têm apostado na qualidade
							garantida de um processo feito sob demanda. Produzimos e
							classificamos cada pedido após a sua confirmação, garantindo
							produtos sempre frescos e prontos para o mercado. Junte-se a quem
							já está crescendo com a gente!
						</motion.p>
						<motion.div
							className="flex flex-col lg:flex-row gap-2 md:gap-4"
							variants={itemVariants}
						>
							<motion.div variants={itemVariants}>
								<Button
									asChild
									className="rounded-lg font-bold w-full md:w-auto"
									variant="outline"
									size="lg"
								>
									<a href="https://wa.me/554191244175">
										Conversar com um especialista <SquareArrowOutUpRight />
									</a>
								</Button>
							</motion.div>
							<motion.div variants={itemVariants}>
								<Button
									asChild
									className="rounded-lg font-bold w-full md:w-auto"
									variant="ghost"
									size="lg"
								>
									<Link to="/payments">Pagamentos</Link>
								</Button>
							</motion.div>
						</motion.div>
					</motion.div>
					<motion.div
						className="flex flex-1 max-w-full px-0 lg:px-12 xl:px-0"
						variants={itemVariants}
					>
						<Chart />
					</motion.div>
				</motion.div>
			</ContainerSpacing>
		</motion.div>
	);
}

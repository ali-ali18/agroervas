import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface CardProps {
	id: number;
	img: string;
	title: string;
	description: string;
}

export default function CardProducts({
	id,
	img,
	title,
	description,
}: CardProps) {
	return (
		<Card key={id} className="w-full max-w-full ">
			<CardHeader className="pb-1.5">
				<div className="flex justify-center">
					<img
						className="w-full h-[300px] rounded-lg object-cover"
						src={img}
						alt={title}
					/>
				</div>
				<CardTitle className="text-3xl mt-6">{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p>{description}</p>
			</CardContent>
		</Card>
	);
}

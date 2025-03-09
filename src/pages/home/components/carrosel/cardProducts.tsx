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
		<div
			className="rounded-lg relative max-w-full w-[350px] h-[460px] md:h-[500px]"
			key={id}
		>
			<img src={img} alt={title} className="w-full h-full rounded-lg" />
			<div className="bg-gradient-to-b from-transparent p-4 to-black absolute bottom-0 text-white rounded-b-lg">
				<strong className="text-3xl capitalize">{title}</strong>
				<p className="mt-0.5 text-gray-300">{description}</p>
			</div>
		</div>
	);
}

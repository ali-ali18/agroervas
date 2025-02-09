import type { ContentAboutProps } from "@/Interfaces/contentAboutProps";

export default function ContentAbout({
	title,
	description,
	img,
}: ContentAboutProps) {
	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-2xl font-bold">{title}</h2>
			<p className="text-base text-muted-foreground">{description}</p>
			{img && (
				<div className="flex justify-center items-center">
					<img src={img} alt={title} className="object-cover rounded-md w-full h-full max-h-[500px]"/>
				</div>
			)}


		</div>
	);
}

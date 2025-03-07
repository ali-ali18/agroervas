import { Skeleton } from "../ui/skeleton";

export default function SkeletonPG() {
	return (
		<div className="flex flex-col items-center justify-center py-5 gap-2">
			<Skeleton className="h-10 w-[500px] max-w-full" />
			<div className="flex gap-2">
				<Skeleton className="h-[350px] w-[350px] max-w-full" />
				<Skeleton className="h-[350px] w-[350px]" />
				<Skeleton className="h-[350px] w-[350px]" />
			</div>
		</div>
	);
}

import { Skeleton } from "../ui/skeleton";

export default function SkeletonPG() {
    return (
        <div className="flex flex-col items-center justify-center gap-1">
            <Skeleton className="h-20 w-[350px]"/>
            <Skeleton className="h-20 w-[350px]"/>
            <Skeleton className="h-20 w-[350px]"/>
        </div>
    )
}
import type { ContainerSpacingProps } from "@/Interfaces/ContaienrSpacingProps";

export function ContainerSpacing({ children }: ContainerSpacingProps) {
    return (

        <div className="container mx-0 sm:mx-auto max-w-7xl px-6 flex-grow pt-5 sm:pt-16">
            {children}
        </div>
    )
}

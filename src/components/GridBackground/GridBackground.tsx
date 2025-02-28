type GridBackgroundType = 'grid' | 'dot' | 'small-grid';
export interface GridBackgroundProps {
	children: React.ReactNode;
	height?: string;
	gridBg?: GridBackgroundType;
}


export function GridBackgroundDemo({
	children,
	height = "50rem",
	gridBg = 'grid',
}: GridBackgroundProps) {
	return (
		<div

			className={`${height} w-full max-w-full dark:bg-[#09090B] bg-white ${gridBg === 'grid' ? 'dark:bg-grid-white/[0.2] bg-grid-black/[0.2]' : gridBg === 'dot' ? 'dark:bg-dot-white/[0.2] bg-dot-black/[0.2]' : 'dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]'} relative flex items-center justify-center`}
			style={{ height: height }}
		>
			<div className="absolute max-w-full pointer-events-none inset-0 flex items-center justify-center dark:bg-[#09090B] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			<div className="text-4xl sm:text-7xl font-bold relative z-20 py-8">
				{children}
			</div>

		</div>
	);
}

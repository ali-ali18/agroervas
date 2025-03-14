import type { IconsProps } from "@/Interfaces/IconsProps";

export function CustomIcon({ height,size = 38, width, ...props }: IconsProps) {
	return (
		<svg
			width={width || size}
			height={height || size}
			viewBox="0 0 118 86"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Logo ACS</title>
			<desc>Logo da empresa ACS representado por um ícone estilizado</desc>
			<path
				d="M3.99997 65.5C16.3833 60.6043 33.7428 37.9604 46.2381 19.6373C54.1681 8.00873 71.3963 6.93591 80.1026 17.9952L92.0163 33.1288C102.345 46.2486 92.9988 65.5 76.3015 65.5H62H35M30.5 26.5L37.75 32L45 37.5"
				stroke="currentColor"
				strokeWidth="19"
			/>
		</svg>
	);
}

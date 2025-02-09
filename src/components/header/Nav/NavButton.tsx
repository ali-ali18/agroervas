import type { navConfigProps } from "@/Interfaces/navConfig";
import { Link } from "react-router-dom";

export default function NavButton({label, path, description}:navConfigProps ) {
	return (
		<Link className="mx-2" to={path} key={path}>
			<h2 className="text-base font-medium hover:text-muted-foreground transition-all duration-300">
				{label}
			</h2>
			<p className="text-sm text-muted-foreground">{description}</p>
		</Link>
	);
}

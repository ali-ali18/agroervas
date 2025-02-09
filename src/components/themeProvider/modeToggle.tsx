import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "./themeProvider";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<Button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			variant={"ghost"}
			size="icon"
			aria-label="Toggle theme"
            className="[&_svg]:size-5"
            
		>
			{theme === "dark" ? <Sun size={18}/> : <Moon />}
		</Button>

	);
}

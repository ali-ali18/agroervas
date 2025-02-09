import { Link } from "react-router-dom";
import { CustomIcon } from "../icons/icons";
import { ModeToggle } from "../themeProvider/modeToggle";
import Nav from "./Nav/nav";
import DrawerNav from "./Drawer/Drawer";
import { Button } from "../ui/button";
import { MessageCircle } from "lucide-react";

export default function Header() {
	return (
		<header className="flex justify-between items-center p-1 px-4 border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<Link to="/" className="hover:opacity-80 transition-all duration-300">
				<CustomIcon />
			</Link>
			<div className="hidden md:block">
				<Nav />
			</div>
			<div className="flex items-center gap-2">
				<Button asChild variant={"outline"} className="bg-transparent hidden sm:flex">
					<a
						href="https://wa.me/554191244175"
						target="_blank"
						rel="noopener noreferrer"
					>
						SAC <MessageCircle />
					</a>
				</Button>
				<ModeToggle />

				<div className="md:hidden">
					<DrawerNav />
				</div>
			</div>
		</header>
	);
}

import { Link } from "react-router-dom";
import { ModeToggle } from "../themeProvider/modeToggle";
import Nav from "./Nav/nav";
import DrawerNav from "./Drawer/Drawer";
import { Button } from "../ui/button";
import { MessageCircle } from "lucide-react";
import logoAgro from '../../assets/logoAgro.png'

export default function Header() {
	return (
		<header className="flex justify-between items-center p-1 px-4 border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<Link to="/" className="hover:opacity-80 transition-all duration-300">
				<img src={logoAgro} alt="logo agroervas" className="w-11 md:w-12"/>
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

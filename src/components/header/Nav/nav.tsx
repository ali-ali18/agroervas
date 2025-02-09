import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import navConfig from "@/lib/navConfig";
import { Link } from "react-router-dom";
import { CustomIcon } from "@/components/icons/icons";
import NavButton from "./NavButton";

export default function Nav() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link to="/">Home</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Categorias</NavigationMenuTrigger>

					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
							<li className="row-span-2">
								<NavigationMenuLink
									asChild
									className="flex flex-col gap-4 justify-center"
								>
									<Link
										to="/"
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
									>
										<CustomIcon
											size={40}
											className="hover:text-muted-foreground transition-all duration-300"
										/>
										<h1 className="my-2 text-lg font-medium hover:text-muted-foreground transition-all duration-300">
											Agroervas
										</h1>
										<p className="text-sm text-muted-foreground">
											Parceira ideal para o seu negócio, oferecendo produtos
											naturais com controle de qualidade em cada etapa do
											processo.
										</p>
									</Link>
								</NavigationMenuLink>
							</li>
							{navConfig.slice(1, 3).map(({ label, path, description }) => (
								<NavButton
									key={path}
									label={label}
									path={path}
									description={description}
								/>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Duvidas</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{navConfig.slice(3, 6).map(({ label, path, description }) => (
								<NavButton
									key={path}
									label={label}
									path={path}
									description={description}
								/>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

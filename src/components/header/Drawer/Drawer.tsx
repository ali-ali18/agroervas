import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import navConfig from "@/lib/navConfig";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DrawerNav() {
	const [open,setOpen] = useState(false)

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button variant="ghost" size="icon" className="[&_svg]:size-6">
					<MenuIcon/>
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="p-4 flex flex-col gap-3">
					{navConfig.map(({ label, path }) => (
						<Link
							to={path}
							key={label}
							className="text-lg font-medium pb-2 hover:opacity-80 transition-all duration-300"
							onClick={() => setOpen(false)}
						>
							{label}
						</Link>
					))}
				</div>
			</DrawerContent>
		</Drawer>
	);
}

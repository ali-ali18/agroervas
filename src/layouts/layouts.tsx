import Header from "@/components/header/header";
import { CustomIcon } from "@/components/icons/icons";
import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<div className="relative flex flex-col h-screen">
			<Header />
			<main className="">
				<Outlet />
			</main>
			<footer className="text-center text-primary w-full my-4 border-t p-2">
				<div className="pb-2">
					<p className="text-sm text-muted-foreground">
						&copy; {new Date().getFullYear()} Agroervas. All rights reserved
					</p>
				</div>
				<div className="flex items-center justify-center gap-2">
					<a
						href="https://github.com/ali-ali18"
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-1 hover:opacity-80 transition-all duration-300 text-muted-foreground text-sm"
					>
						<CustomIcon size={28} />
						Powered by{" "}
						<span className="font-bold text-blue-700 hover:text-blue-800 transition-all duration-500">
							ACS
						</span>
					</a>
				</div>
			</footer>
		</div>
	);
}

import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layouts";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/Contact/contact";
import History from "./pages/history";
import Delivery from "./pages/delivery";
import Payments from "./pages/payments";
const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},

			{
				path: "/contact",
				element: <Contact />,
			},

			{
				path: "/history",
				element: <History />,
			},

			{
				path: "/delivery",
				element: <Delivery />,
			},
			{
				path: "/payments",
				element: <Payments />,
			},
		],
	},
]);

export default router;

import { Link } from "react-router-dom";

export default function LinksDesktop ({to, children}) {
    return (
        <Link className="text-lg text-black p-2 hover:text-gray-700 transition-colors duration-300 font-semibold" to={to}>{children}</Link>
    )
}
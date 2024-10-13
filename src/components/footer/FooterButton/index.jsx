import { Link } from "react-router-dom";

export default function ButtonFooter({ children, to }) {
  return (
    <li>
      <Link
        to={to}
        className='block w-full text-white hover:text-gray-400 transition-colors duration-300 py-2'
      >
        {children}  
      </Link>
    </li>
  );
}

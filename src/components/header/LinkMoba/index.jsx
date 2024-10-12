import { Link } from 'react-router-dom';

export default function LinkMoba({ to, children,onclick }) {
	return <Link onClick={onclick} className='text-base rounded-md font-semibold py-2 px-4 active:bg-gray-200' to={to}>{children}</Link>;
}

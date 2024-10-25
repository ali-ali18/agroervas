import { Helmet } from 'react-helmet-async';
import DireitoAutoral from './components/textAutoral';

export default function PageDireitoAutoral() {
	return (
		<main className='flex flex-col items-center min-h-screen bg-gray-100'>
			<Helmet>
				<title>Agroervas | Direitos Autorais</title>
			</Helmet>
			<div className='w-full max-w-6xl px-4 py-12'>
				<DireitoAutoral />
			</div>
		</main>
	);
}

import { Link } from 'react-router-dom';

export default function CardHistoria({ caminhoImg, altImg, textHistoria, to }) {
	return (
		<div className='w-full flex flex-col-reverse items-center justify-center mt-4 md:flex-row gap-7'>
			<div className='md:w-1/2 w-full'>
				<img
					className='w-full h-96 object-cover rounded-lg flex-1'
					src={caminhoImg}
					alt={altImg}
				/>
			</div>
			<div className='flex flex-col items-center justify-center text-center md:text-start md:items-start md:w-1/2'>
				<h1 className='text-3xl font-bold mb-4'>História</h1>
				<p className='text-lg text-gray-800'>{textHistoria}</p>
				<div className='flex items-center w-full'>
					<Link to={to} className='w-full py-2 mt-5 text-center bg-gray-200 rounded-md text-black font-bold hover:bg-gray-700 hover:text-white transition-colors duration-300'>Ver mais</Link>
				</div>
			</div>
			
		</div>
	);
}

import { useEffect, useState } from 'react';
import { anteriorImg, proximaImg } from './functions/carroselItens';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Carrossel({ imagesMobile, imagesDesktop }) {
	const [indexImgs, setIndexImgs] = useState(0);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Define se é mobile ou não

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const images = isMobile ? imagesMobile : imagesDesktop;

	useEffect(() => {
		const intervalo = setInterval(() => {
			proximaImg(images, setIndexImgs);
		}, 8000);
		return () => clearInterval(intervalo);
	}, [images]);

	return (
		<div className='relative w-full h-[450px] overflow-hidden'>
			{images.map((image, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
						index === indexImgs ? 'translate-x-0' : 'translate-x-full'
					}`}
					style={{
						backgroundImage: `url(${image})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						width: '100%',
						height: '100%',
					}}
				/>
			))}

			<button
				aria-label='Imagem anterior'
				type='button'
				onClick={() => anteriorImg(images, setIndexImgs)}
				className='absolute text-4xl rounded-full left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2'
			>
				<IoIosArrowBack />
			</button>
			<button
				aria-label='Próxima imagem'
				type='button'
				onClick={() => proximaImg(images, setIndexImgs)}
				className='absolute text-4xl rounded-full right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2'
			>
				<IoIosArrowForward />
			</button>

			<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
				{images.map((_, index) => (
					<span
						key={index}
						onClick={() => setIndexImgs(index)}
						className={`cursor-pointer w-3 h-3 rounded-full ${
							index === indexImgs ? 'bg-white' : 'bg-gray-400'
						}`}
					/>
				))}
			</div>
		</div>
	);
}

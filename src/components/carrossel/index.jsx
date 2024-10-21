import { useEffect, useState } from 'react';
import { anteriorImg, proximaImg } from './functions/carroselItens';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Carrossel({ images }) {
	const [indexImgs, setIndexImgs] = useState(0);

	useEffect(() => {
		const intervalo = setInterval(() => {
			proximaImg(images, setIndexImgs);
		}, 8000);
		return () => clearInterval(intervalo);
	}, [images]);

	return (
		<div className='relative w-full h-128 overflow-hidden'>
			{images.map((image, index) => (
				<img
					key={index}
					src={image}
					alt={`Imagem ${index + 1}`}
					loading={index === indexImgs ? 'eager' : 'lazy'} // Carrega a imagem ativa com mais prioridade
					className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out ${
						index === indexImgs ? 'translate-x-0' : 'translate-x-full'
					}`}
					style={{
						transitionProperty: 'transform, opacity',
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
				aria-label='Proxima imagem'
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

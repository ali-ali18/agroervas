export default function SecaoImagemTexto({ imagem, alt, texto, invertido }) {
	return (
		<div
			className={`flex flex-col ${invertido ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 mt-8`}
		>
			{/* Imagem Otimizada */}
			<img
				src={imagem}
				alt={alt}
				loading='lazy'
                className="w-full md:w-2/5 lg:w-1/3 rounded-lg shadow-lg"
                />

			{/* Texto */}
			<p className='text-lg text-gray-700 leading-relaxed md:w-2/3 lg:w-2/3'>
				{texto}
			</p>
		</div>
	);
}

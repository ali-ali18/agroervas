export default function Page404() {
	return (
		<div
			className='flex flex-col items-center justify-center w-full'
			style={{ height: 'calc(100vh - 96px)' }} // Ajustando a altura com calc()
		>
			<h1 className='text-6xl font-bold text-blue-600 mb-4'>404</h1>
			<p className='text-2xl font-semibold text-gray-700 mb-2'>
				Oops! Página não encontrada.
			</p>
			<p className='text-lg text-gray-500 mb-6'>
				Parece que essa página não existe ou foi removida.
			</p>

			<a
				href='/'
				className='bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-500 transition-colors'
			>
				Voltar à página inicial
			</a>

			<span className='mt-8 text-gray-500'>
				Ou use o menu para navegar pelas abas :)
			</span>
		</div>
	);
}

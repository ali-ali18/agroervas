import ButtonFooter from './FooterButton';

export default function Footer() {
	return (
		<footer className='grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-800 text-white py-8 px-4'>
			{/* Seção Navegação */}
			<div>
				<h2 className='text-lg font-semibold border-b-2 border-green-500 pb-2'>
					Navegação
				</h2>
				<ul className='space-y-2'>
					<ButtonFooter to='/'>Início</ButtonFooter>
					<ButtonFooter to='/contato'>Contato</ButtonFooter>
					<ButtonFooter to='/historia'>História</ButtonFooter>
					<ButtonFooter to='/pagamento'>Formas de Pagamento</ButtonFooter>
					<ButtonFooter to='/entrega'>Formas de entrega</ButtonFooter>
				</ul>
			</div>

			{/* Seção Direitos Autorais */}
			<div>
				<h2 className='text-lg font-semibold border-b-2 border-green-500 pb-2'>
					Direitos Autorais
				</h2>
				<ul className='space-y-2'>
					<ButtonFooter to='/imagens'>Imagens</ButtonFooter>
					<ButtonFooter to='/informacoes'>Informações</ButtonFooter>
				</ul>
			</div>

			{/* Seção Logo - Centralizada em relação aos itens */}
			<div className='flex flex-col items-center justify-center'>
				<img
					src='./imgs/logo.png'
					alt='logo agroervas'
					className='w-32 h-auto'
				/>
			</div>

			{/* Direitos Autorais - Texto */}
			<div className='text-center text-sm text-white mt-8 col-span-full'>
				&copy; {new Date().getFullYear()} Agroervas. Todos os direitos
				reservados.
			</div>
		</footer>
	);
}

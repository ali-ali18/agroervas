import { Link } from 'react-router-dom';
import LinksDesktop from './LinkDesk';
import { IoMenu } from 'react-icons/io5';
import { useState } from 'react';
import LinkMoba from './LinkMoba';
import { FaTimes } from 'react-icons/fa';

export default function Cabecalho() {
	const [toggle, setToggle] = useState(false);

	const buttonToggle = () => {
		setToggle(!toggle);
	};

	return (
		<header className='flex items-center justify-between p-4 h-24 shadow-md z-50'>
			{/* Logo */}
			<Link className='text-4xl font-bold' to='/'>
				<img
					src='../imgs/logo.png'
					alt='logo agroervas'
					className='w-20 h-auto'
				/>
			</Link>

			{/* Navegação do desktop */}
			<nav className='hidden sm:flex gap-3 items-center justify-center'>
				<LinksDesktop to='/'>Inicio</LinksDesktop>
				<LinksDesktop to='/contato'>Contato</LinksDesktop>
				<LinksDesktop to='/historia'>Nossa história</LinksDesktop>
				<LinksDesktop to='/pagamento'>Formas de pagamento</LinksDesktop>
			</nav>

			{/* Botão toggle mobile */}
			<button
				className='sm:hidden'
				onClick={buttonToggle}
				type='button'
				aria-label='Botão abrir o menu'
			>
				<IoMenu size={40} />
			</button>

			{/* Menu mobile */}
			<div
				className={`
            fixed 
            top-0 
            right-0 
            h-full 
            w-2/3 
            bg-white
            shadow-lg
            text-black
            transform 
            transition-transform 
            duration-500 
            ease-in-out
            ${toggle ? 'translate-x-0' : 'translate-x-full'}
            z-50
            `}
			>
				<div className='flex justify-end py-2 px-2'>
					<FaTimes
						aria-label='Fechar o menu'
						tabIndex='0'
						role='button'
						onClick={() => setToggle(false)}
						size={28}
					/>
				</div>

				{/* Navegação mobile */}
				<nav className='flex flex-col gap-3 p-4'>
					<LinkMoba to='/' onclick={() => setToggle(false)}>
						Inicio
					</LinkMoba>
					<LinkMoba to='/contato' onclick={() => setToggle(false)}>
						Contato
					</LinkMoba>
					<LinkMoba to='/historia' onclick={() => setToggle(false)}>
						Nossa história
					</LinkMoba>
					<LinkMoba to='/pagamento' onclick={() => setToggle(false)}>
						Formas de pagamento
					</LinkMoba>
				</nav>
			</div>
		</header>
	);
}

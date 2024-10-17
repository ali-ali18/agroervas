import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md'; // Importando ícones para os métodos de contato
import FormularioFaleConosco from '../../components/FaleConosco/FaleConoscoButtons/form';
import { Helmet } from 'react-helmet-async';

export default function Contato() {
	return (
		<main className='flex flex-col items-center min-h-screen bg-gray-100 py-10 px-4'>
			<Helmet>
				<title>Agroervas | Contato</title>
				<meta
					name='description'
					content='Entre em contato com a Agroervas e descubra como podemos ajudar com nossos produtos naturais e fitoterápicos. Estamos disponíveis por telefone, WhatsApp e e-mail para atender suas dúvidas e pedidos.'
				/>
			</Helmet>

			<h2 className='text-3xl font-bold mb-6 text-center text-gray-800'>
				Entre em Contato
			</h2>

			{/* Formas de Contato */}
			<div className='mb-10'>
				<h3 className='text-xl font-semibold text-gray-700 mb-4 text-center'>
					Formas de Contato:
				</h3>

				{/* WhatsApp */}
				<div className='flex items-center justify-center mb-3'>
					<MdWhatsapp size={30} className='text-green-600 mr-2' />
					<a
						href='https://wa.me/5511988888888'
						target='_blank'
						rel='noopener noreferrer'
						className='text-lg text-gray-600 hover:text-green-800 transition-colors'
					>
						WhatsApp: (11) 98888-8888
					</a>
				</div>

				{/* Telefone */}
				<div className='flex items-center justify-center mb-3'>
					<MdPhone size={30} className='text-blue-600 mr-2' />
					<p className='text-lg text-gray-600'>Telefone: (11) 9999-9999</p>
				</div>

				{/* Email */}
				<div className='flex items-center justify-center mb-3'>
					<MdEmail size={30} className='text-red-600 mr-2' />
					<a
						href='mailto:contato@agroervas.com'
						className='text-lg text-gray-600 hover:text-red-800 transition-colors'
					>
						Email: contato@agroervas.com
					</a>
				</div>
			</div>

			{/* Formulário de Contato */}
			<FormularioFaleConosco />
		</main>
	);
}

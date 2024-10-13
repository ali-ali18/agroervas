import { useState } from 'react';
import { InputText } from './inputs';
import { InputTextArea } from './textArea';
import { submit } from './functions/submit';

export default function FormularioFaleConosco() {
	const [nome, setNome] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [email, setEmail] = useState('');
	const [mensagem, setMensagem] = useState('');

	return (
		<form
			onSubmit={(e) => submit(e, nome, whatsapp, email, mensagem, setNome, setMensagem, setEmail, setWhatsapp)}
			className='flex flex-col px-4 md:px-8 lg:px-16 w-full gap-8 items-center py-12 bg-gray-100'
		>
			<h2 className='text-4xl font-semibold text-center mb-8'>Fale conosco</h2>

			<div className='flex flex-col w-full max-w-4xl bg-white rounded-lg p-6 gap-4 shadow-lg'>
				<InputText
					id='nome'
					label='Nome'
					type='text'
					placeholder='Digite seu nome'
					onChange={(e) => setNome(e.target.value)}
					value={nome}
				/>
				<InputText
					id='whatsapp'
					label='WhatsApp'
					type='tel'
					placeholder='Digite seu WhatsApp'
					onChange={(e) => setWhatsapp(e.target.value)}
					value={whatsapp}
				/>
				<InputText
					id='email'
					label='Email'
					type='email'
					placeholder='Digite seu email'
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<InputTextArea
					id='mensagem'
					label='Mensagem'
					placeholder='Digite sua mensagem'
					onChange={(e) => setMensagem(e.target.value)}
					value={mensagem}
				/>

				<button
					type='submit'
					className='bg-green-700 text-white py-3 rounded-md font-semibold hover:bg-green-500 transition-colors'
				>
					Enviar Mensagem
				</button>
			</div>
		</form>
	);
}

import { useState } from 'react';
import { loginSubmit } from './functions/loginSubmit';
import { auth } from '../../api';
import { useNavigate } from 'react-router-dom';

export default function LoginUser() {
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [erro, setErro] = useState('');

    const navigate = useNavigate()

	return (
		<main className='flex items-center justify-center min-h-screen bg-gray-100'>
			<form
				onSubmit={(e) => loginSubmit(e, auth, email, senha, setErro, navigate)}
				className='bg-white p-10 rounded-lg shadow-lg w-full max-w-md'
			>
				<h2 className='text-3xl font-bold mb-2 text-center'>Login</h2>
				<p className='text-center text-gray-600 mb-8'>
					Faça login para acessar os dados da Agroervas.
				</p>

				<div className='mb-6'>
					<label htmlFor='email' className='block text-lg font-semibold mb-2'>
						Email
					</label>
					<input
						type='email'
						id='email'
						className='w-full p-4 border rounded-lg focus:outline-none focus:border-green-500'
						placeholder='Digite seu email'
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className='mb-8'>
					<label
						htmlFor='password'
						className='block text-lg font-semibold mb-2'
					>
						Senha
					</label>
					<input
						type='password'
						id='password'
						className='w-full p-4 border rounded-lg focus:outline-none focus:border-green-500'
						placeholder='Digite sua senha'
						required
						value={senha}
						onChange={(e) => setSenha(e.target.value)}
					/>
				</div>

				{erro && <p className='text-red-500 text-center mb-4'>{erro}</p>}

				<button
					type='submit'
					className='w-full bg-green-600 text-white p-4 rounded-lg font-semibold hover:bg-green-500 transition-colors'
				>
					Entrar
				</button>
			</form>
		</main>
	);
}

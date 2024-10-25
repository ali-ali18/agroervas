import { useEffect, useState } from 'react';
import {
	handleAddPeso,
	handleRemovePeso,
	handlePesoChange,
	calcularTotalPeso,
} from './Functions/CalcularPeso';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../api';
import { toast } from 'react-toastify';
import verificaAutenticacao from '../../utils/auth';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Entrada() {
	const [pesos, setPesos] = useState([{ peso: '' }]);
	const [nomeProduto, setNomeProduto] = useState('');
	const [fornecedor, setFornecedor] = useState('');
	const [quantidade, setQuantidade] = useState('');
	const dataEntrada = new Date().toLocaleDateString();
	const [user, userLoading] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		verificaAutenticacao(userLoading, user, navigate);
	}, [userLoading, user, navigate]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const entrada = {
			nomeProduto,
			fornecedor,
			quantidade: Number(quantidade),
			pesos: pesos.map((p) => Number(p.peso)),
			pesoTotal: calcularTotalPeso(pesos),
			dataEntrada,
		};

		try {
			await addDoc(collection(db, 'entrada'), entrada);
			toast.success('Produtos registrados com sucesso');

			// Resetar os campos do formulário
			setNomeProduto('');
			setFornecedor('');
			setQuantidade('');
			setPesos([{ peso: '' }]);
		} catch (error) {
			toast.error(`Ocorreu um erro ao enviar os produtos: ${error.message}`);
		}
	};

	return (
		<main className='p-8'>
			<h1 className='text-3xl font-bold mb-6 text-center text-green-700'>
				Entrada de Produtos no Estoque
			</h1>
			<form
				onSubmit={handleSubmit}
				className='bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto space-y-6'
			>
				<div>
					<label
						className='block text-lg font-semibold mb-2'
						htmlFor='nomeProduto'
					>
						Nome do Produto
					</label>
					<input
						type='text'
						id='nomeProduto'
						value={nomeProduto}
						onChange={(e) => setNomeProduto(e.target.value)}
						className='w-full p-3 border rounded-lg'
						required
					/>
				</div>
				<div>
					<label
						className='block text-lg font-semibold mb-2'
						htmlFor='fornecedor'
					>
						Fornecedor
					</label>
					<input
						type='text'
						id='fornecedor'
						value={fornecedor}
						onChange={(e) => setFornecedor(e.target.value)}
						className='w-full p-3 border rounded-lg'
						required
					/>
				</div>
				<div>
					<label
						className='block text-lg font-semibold mb-2'
						htmlFor='quantidade'
					>
						Quantidade de Sacos/Itens
					</label>
					<input
						type='number'
						id='quantidade'
						value={quantidade}
						onChange={(e) => setQuantidade(e.target.value)}
						className='w-full p-3 border rounded-lg'
						required
					/>
				</div>
				<div>
					<span className='block text-lg font-semibold mb-2'>
						Pesagens (kg)
					</span>
					{pesos.map((peso, index) => (
						<div key={index} className='flex items-center gap-4 mb-2'>
							<input
								type='number'
								step='0.01'
								value={peso.peso}
								onChange={(e) =>
									handlePesoChange(index, e.target.value, setPesos, pesos)
								}
								className='w-full p-3 border rounded-lg'
								required
							/>
							<button
								type='button'
								onClick={() => handleRemovePeso(setPesos, pesos, index)}
								className='bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-500 transition-colors'
							>
								Remover
							</button>
						</div>
					))}
					<button
						type='button'
						onClick={() => handleAddPeso(setPesos, pesos)}
						className='mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-500 transition-colors'
					>
						Adicionar Nova Pesagem
					</button>
				</div>
				<div className='text-lg font-semibold'>
					Peso Total: {calcularTotalPeso(pesos)} kg
				</div>
				<div>
					<span className='block text-lg font-semibold mb-2'>
						Data de Entrada
					</span>
					<p className='p-3 border rounded-lg bg-gray-100'>{dataEntrada}</p>
				</div>
				<button
					type='submit'
					className='w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors'
				>
					Registrar Entrada
				</button>
			</form>
			<div className='mt-8 text-center'>
				<Link
					to='/entradas'
					className='text-green-700 font-semibold hover:underline text-lg'
				>
					Ver Todas as Entradas
				</Link>
			</div>
		</main>
	);
}

import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../api';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import verificaAutenticacao from '../../utils/auth';

export default function Faltas() {
	const [user, userLoading] = useAuthState(auth);
	const navigate = useNavigate();
	// Estado para armazenar o nome e a quantidade dos produtos faltantes
	const [produtoFaltante, setProdutoFaltante] = useState({
		nome: '',
		quantidade: 0,
	});
	// Estado para armazenar a lista de produtos faltantes
	const [faltas, setFaltas] = useState([]);

	// Função para adicionar produto à lista de faltas e ao Firebase
	const adicionarFalta = async () => {
		// Permitir valores zero ou superiores, mas evitar negativos
		if (produtoFaltante.nome && produtoFaltante.quantidade >= 0) {
			try {
				// Adiciona o produto no Firestore
				const docRef = await addDoc(collection(db, 'faltas'), {
					nome: produtoFaltante.nome,
					quantidade: produtoFaltante.quantidade,
				});
				// Adiciona o produto localmente
				setFaltas((prevFaltas) => [
					...prevFaltas,
					{
						id: docRef.id,
						nome: produtoFaltante.nome,
						quantidade: produtoFaltante.quantidade,
					},
				]);

				// Reseta os campos após adicionar
				setProdutoFaltante({ nome: '', quantidade: 0 });
				toast.success('Produto adicionado com sucesso!');
			} catch (error) {
				toast.error('Erro ao adicionar o produto');
			}
		} else {
			toast.warning(
				'Por favor, insira um nome válido e quantidade não negativa',
			);
		}
	};

	useEffect(() => {
		verificaAutenticacao(userLoading, user, navigate);
	}, [user, userLoading,navigate]);

	// Função para remover um produto da lista e do Firebase
	const removerFalta = async (id) => {
		try {
			// Remove o documento do Firestore
			await deleteDoc(doc(db, 'faltas', id));
			// Remove o produto localmente
			setFaltas((prevFaltas) => prevFaltas.filter((falta) => falta.id !== id));
			toast.success('Produto removido com sucesso!');
		} catch (error) {
			toast.error('Erro ao remover o produto');
		}
	};

	return (
		<main className='p-8 bg-gray-50 min-h-screen'>
			<Helmet>
				<title>Agroervas | Produtos em Faltas</title>
			</Helmet>

			<div className='max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md'>
				<h1 className='text-3xl font-bold mb-6 text-center text-blue-600'>
					Produtos em Faltas
				</h1>

				{/* Área de inserção de produtos faltantes */}
				<div className='bg-white p-6 rounded-xl shadow-lg mb-8 max-w-2xl mx-auto'>
					<div className='flex flex-col gap-4'>
						<label
							htmlFor='nomeProduto'
							className='text-lg font-semibold text-gray-700'
						>
							Nome do Produto Faltante
						</label>
						<input
							id='nomeProduto'
							type='text'
							value={produtoFaltante.nome}
							onChange={(e) =>
								setProdutoFaltante({ ...produtoFaltante, nome: e.target.value })
							}
							className='w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500'
							placeholder='Nome do Produto'
						/>

						<label
							htmlFor='quantidadeProduto'
							className='text-lg font-semibold text-gray-700'
						>
							Quantidade Faltante
						</label>
						<input
							id='quantidadeProduto'
							type='number'
							value={produtoFaltante.quantidade}
							onChange={(e) =>
								setProdutoFaltante({
									...produtoFaltante,
									quantidade: e.target.value,
								})
							}
							className='w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500'
							placeholder='Quantidade Faltante'
							min='0' // Prevenir valores negativos
						/>
					</div>

					<button
						type='button'
						onClick={adicionarFalta}
						className='mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-500 transition-colors shadow-md flex items-center gap-2'
					>
						<FaPlus /> Adicionar Produto
					</button>
				</div>

				{/* Tabela de produtos faltantes */}
				<div className='bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto'>
					<h2 className='text-xl font-bold mb-4 text-center text-blue-600'>
						Produtos Faltantes
					</h2>
					{faltas.length === 0 ? (
						<p className='text-center text-gray-500'>
							Nenhum produto faltando no estoque
						</p>
					) : (
						<table className='w-full bg-white rounded-xl shadow-lg'>
							<thead>
								<tr className='bg-gray-200'>
									<th className='py-3 px-6 border-b text-left text-gray-700'>
										Produto
									</th>
									<th className='py-3 px-6 border-b text-left text-gray-700'>
										Quantidade
									</th>
									<th className='py-3 px-6 border-b text-left text-gray-700'>
										Ações
									</th>
								</tr>
							</thead>
							<tbody>
								{faltas.map((falta, index) => (
									<tr key={index}>
										<td className='py-3 px-6 border-b'>{falta.nome}</td>
										<td className='py-3 px-6 border-b'>{falta.quantidade}</td>
										<td className='py-3 px-6 border-b'>
											<button
												type='button'
												onClick={() => removerFalta(falta.id)}
												className='bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-500 transition-colors shadow-md flex items-center gap-2'
											>
												<FaTrash /> Remover
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</div>
			</div>
		</main>
	);
}

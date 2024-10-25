import { useEffect, useState } from 'react';
import { auth, db } from '../../api';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { FaTrash } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import verificaAutenticacao from '../../utils/auth';

export default function Entradas() {
	const [entradas, setEntradas] = useState([]);
	const [loading, setLoading] = useState(true);
	const [user, userLoading] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchEntradas = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, 'entrada'));
				const listaEntradas = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setEntradas(listaEntradas);
				setLoading(false);
			} catch (error) {
				toast.error('Erro ao buscar as entradas de produtos.');
				setLoading(false);
			}
		};
		verificaAutenticacao(userLoading,user,navigate)
		fetchEntradas();
	}, [userLoading,user,navigate]);

	const handleDelete = async (id) => {
		try {
			await deleteDoc(doc(db, 'entrada', id));
			setEntradas(entradas.filter((entrada) => entrada.id !== id));
			toast.success('Entrada deletada com sucesso.');
		} catch (error) {
			toast.error('Erro ao deletar a entrada.');
		}
	};

	if (loading) {
		return <p className='text-center text-2xl mt-10'>Carregando...</p>;
	}

	return (
		<section className='bg-gray-100 text-gray-800 py-12 px-4 min-h-screen'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl font-semibold mb-8 text-center'>
					Entradas de Produtos no Estoque
				</h2>

				{entradas.length > 0 ? (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{entradas.map((entrada) => (
							<div
								key={entrada.id}
								className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4'
							>
								<p className='text-lg font-bold'>
									Produto: {entrada.nomeProduto}
								</p>
								<p className='text-md text-gray-600'>
									Fornecedor: {entrada.fornecedor}
								</p>
								<p className='text-md text-gray-600'>
									Quantidade: {entrada.quantidade}
								</p>
								<p className='text-md text-gray-600'>
									Data de Entrada: {entrada.dataEntrada}
								</p>
								<p className='text-md text-gray-600'>
									Peso Total: {entrada.pesoTotal} kg
								</p>
								<button
									type='button'
									onClick={() => handleDelete(entrada.id)}
									className='bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-500 transition-colors flex items-center gap-2'
								>
									<FaTrash /> Excluir Entrada
								</button>
							</div>
						))}
					</div>
				) : (
					<p className='text-center text-lg'>
						Nenhuma entrada de produtos encontrada.
					</p>
				)}
			</div>
		</section>
	);
}

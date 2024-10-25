import { useEffect, useState } from 'react';
import { auth, db } from '../../api';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdEmail, MdPerson } from 'react-icons/md';
import verificaAutenticacao from '../../utils/auth';
import { Helmet } from 'react-helmet-async';

export default function Dados() {
	const [contatos, setContatos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [user, userLoading] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		verificaAutenticacao(userLoading, user, navigate);

		const buscaContatos = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, 'contatos'));
				const contatoList = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setContatos(contatoList);
				setLoading(false);
			} catch (error) {
				toast.error('Ocorreu um erro inesperado, tente novamente');
				setLoading(false);
			}
		};
		buscaContatos();
	}, [user, userLoading, navigate]);

	if (loading)
		return <p className='text-center text-2xl mt-10'>Carregando...</p>;

	return (
		<main className='flex flex-col items-center min-h-screen bg-gray-50 py-10'>
			<Helmet>
				<title>Agroervas | Dados Clientes</title>
			</Helmet>
			<div className='w-full max-w-6xl p-6'>
				<h2 className='text-3xl font-bold mb-8 text-center text-gray-800'>
					Contatos Recebidos
				</h2>
				{contatos.length === 0 ? (
					<p className='text-center text-gray-600'>
						Nenhum contato encontrado.
					</p>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
						{contatos.map((contato) => (
							<Link
								key={contato.id}
								to={`/dados/${contato.id}`}
								className='bg-white border rounded-lg p-8 hover:bg-gray-100 transition-colors flex flex-col gap-4'
							>
								<div className='flex items-center gap-4'>
									<MdPerson size={30} className='text-gray-700' />
									<h3 className='text-2xl font-medium text-gray-800'>
										{contato.nome}
									</h3>
								</div>
								<div className='flex items-center gap-4'>
									<MdEmail size={25} className='text-gray-700' />
									<p className='text-lg text-gray-700 break-all'>
										{contato.email}
									</p>
								</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</main>
	);
}

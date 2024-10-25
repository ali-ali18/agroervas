import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { auth, db } from '../../../api';
import verificaAutenticacao from '../../../utils/auth';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { FaEnvelope, FaWhatsapp, FaTrash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

export default function ClienteDados() {
	let { id } = useParams();
	const [contato, setContato] = useState(null);
	const [loading, setLoading] = useState(true);
	const [user, userLoading] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		verificaAutenticacao(userLoading, user, navigate);

		const buscaContato = async () => {
			try {
				const refDoc = doc(db, 'contatos', id);
				const snapDoc = await getDoc(refDoc);

				if (snapDoc.exists()) {
					setContato({ id: snapDoc.id, ...snapDoc.data() });
				} else {
					toast.error('Cliente não encontrado');
				}
				setLoading(false);
			} catch (error) {
				toast.error('Ocorreu um erro ao realizar a busca');
				setLoading(false);
			}
		};

		if (user) {
			buscaContato();
		}
	}, [user, userLoading, navigate, id]);

	const handleDelete = async () => {
		try {
			await deleteDoc(doc(db, 'contatos', id));
			toast.success('Cliente excluído com sucesso');
			navigate('/dados');
		} catch (error) {
			toast.error('Erro ao excluir o cliente');
		}
	};

	if (loading || userLoading)
		return <p className='text-center text-2xl mt-10'>Carregando...</p>;
	if (!contato)
		return (
			<>
				<p className='text-center text-2xl mt-10 font-semibold'>
					Erro ao procurar o cliente
				</p>
				<Link
					className='text-center block text-sky-700 text-2xl mt-10 font-semibold hover:underline'
					to='/dados'
				>
					Voltar ao início
				</Link>
			</>
		);

	return (
		<section className='bg-gray-100 text-gray-800 py-12 px-4'>
			<Helmet>
				<title>Agroervas | Cliente: {contato.nome}</title>
			</Helmet>
			<div className='max-w-4xl mx-auto'>
				<h2 className='text-3xl font-semibold mb-8 text-center'>
					Dados do Cliente
				</h2>
				<div className='bg-white p-8 rounded-lg shadow-lg space-y-6'>
					<p className='text-lg'>
						<span className='font-bold'>Nome:</span> {contato.nome}
					</p>
					<p className='text-lg break-words'>
						<span className='font-bold'>Email:</span>{' '}
						<span className='break-all'>{contato.email}</span>
					</p>
					<p className='text-lg'>
						<span className='font-bold'>WhatsApp:</span> {contato.whatsapp}
					</p>
					<p className='text-lg'>
						<span className='font-bold'>Mensagem:</span> {contato.mensagem}
					</p>
					<div className='flex flex-col sm:flex-row gap-4 mt-8'>
						<a
							href={`mailto:${contato.email}?subject=Contato de ${contato.nome}`}
							className='bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-500 transition-transform transform hover:scale-105 flex items-center gap-2 shadow-md'
						>
							<FaEnvelope className='text-2xl' /> Enviar Email
						</a>
						<a
							href={`https://wa.me/${contato.whatsapp}?text=Olá, sou um representante da empresa Agroervas e estou aqui para lhe atender. Como posso lhe ajudar no momento?`}
							target='_blank'
							rel='noopener noreferrer'
							className='bg-green-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-500 transition-transform transform hover:scale-105 flex items-center gap-2 shadow-md'
						>
							<FaWhatsapp className='text-2xl' /> Enviar WhatsApp
						</a>
						<button
							type='button'
							onClick={handleDelete}
							className='bg-red-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-red-500 transition-transform transform hover:scale-105 flex items-center gap-2 shadow-md'
						>
							<FaTrash className='text-2xl' /> Excluir Cliente
						</button>
					</div>
				</div>
				<Link
					to='/dados'
					className='block text-center text-sky-700 mt-10 font-semibold hover:underline'
				>
					Voltar ao início
				</Link>
			</div>
		</section>
	);
}

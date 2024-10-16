import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { auth, db } from '../../../api';
import verificaAutenticacao from '../../../utils/auth';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

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

	if (loading || userLoading)
		return <p className='text-center text-2xl mt-10'>Carregando...</p>;
	if (!contato)
		return (
			<>
				<p className='text-center text-2xl mt-10 font-semibold'>
					Erro ao procurar o cliente
				</p>
				<Link className='text-center block text-sky-700 text-2xl mt-10 font-semibold' to='/dados'>
					Voltar ao inicio
				</Link>
			</>
		);

	return <div>{<p>Seu id é: {id}</p>}</div>;
}

import { useEffect, useState } from 'react';
import { auth, db } from '../../api';
import { buscaFuncionarios, handleSearch } from './functions/BuscaFuncionarios';
import { toast } from 'react-toastify';
import { FaUserTie, FaPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { addDoc, collection } from 'firebase/firestore';
import { Helmet } from 'react-helmet-async';
import verificaAutenticacao from '../../utils/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Funcionarios() {
	const [funcionarios, setFuncionarios] = useState([]);
	const [filtro, setFiltro] = useState('');
	const [loading, setLoading] = useState(true);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [user, userLoading] = useAuthState(auth);
	const navigate = useNavigate();
	const [novoFuncionario, setNovoFuncionario] = useState({
		nome: '',
		cargo: '',
	});

	useEffect(() => {
		verificaAutenticacao(userLoading,user,navigate)
		buscaFuncionarios(setFuncionarios, setLoading, toast, db);
	}, [user,userLoading,navigate]);

	const funcionariosFiltrados = handleSearch(funcionarios, filtro);

	const abrirModal = () => setModalIsOpen(true);
	const fecharModal = () => setModalIsOpen(false);

	const adicionarFuncionario = async (e) => {
		e.preventDefault();
		if (!novoFuncionario.nome || !novoFuncionario.cargo) {
			toast.error('Por favor, preencha todos os campos');
			return;
		}
		try {
			await addDoc(collection(db, 'funcionarios'), novoFuncionario);
			toast.success('Funcionário adicionado com sucesso!');
			setNovoFuncionario({ nome: '', cargo: '' });
			fecharModal();
			buscaFuncionarios(setFuncionarios, setLoading, toast, db);
		} catch (error) {
			toast.error('Erro ao adicionar o funcionário.');
		}
	};

	if (loading) {
		return <p className='text-center text-2xl mt-10'>Carregando...</p>;
	}

	return (
		<section className='bg-gray-100 text-gray-800 py-12 px-4 min-h-screen'>
			<Helmet>
				<title>Agroervas | Funcionarios</title>
			</Helmet>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-4xl font-bold mb-12 text-center text-green-700'>
					Equipe de Funcionários
				</h2>

				{/* Barra de Busca */}
				<div className='mb-12 flex justify-between items-center'>
					<label htmlFor='buscar-funcionario' className='sr-only'>
						Buscar funcionário
					</label>
					<input
						type='text'
						id='buscar-funcionario'
						placeholder='Buscar funcionário pelo nome...'
						value={filtro}
						onChange={(e) => setFiltro(e.target.value)}
						className='w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:border-green-500 shadow-md'
					/>
					<button
						type='button'
						onClick={abrirModal}
						className='ml-4 p-4 rounded-full bg-green-600 text-white hover:bg-green-500 transition-colors shadow-md flex items-center'
					>
						<FaPlus className='text-2xl' />
					</button>
				</div>

				{/* Lista de Funcionários */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
					{funcionariosFiltrados.length > 0 ? (
						funcionariosFiltrados.map((funcionario) => (
							<Link
								to={`/funcionarios/${funcionario.id}`}
								key={funcionario.id}
								className='bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 hover:bg-green-50'
							>
								<FaUserTie className='text-7xl text-green-600 mb-6' />
								<p className='text-2xl font-semibold text-gray-800 mb-2'>
									{funcionario.nome}
								</p>
								<p className='text-md text-gray-500'>{funcionario.cargo}</p>
							</Link>
						))
					) : (
						<p className='text-center text-lg text-gray-600'>
							Nenhum funcionário encontrado.
						</p>
					)}
				</div>
			</div>

			{/* Modal para Adicionar Funcionário */}
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={fecharModal}
				contentLabel='Adicionar Funcionário'
				className='bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto mt-20'
				overlayClassName='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center'
			>
				<h2 className='text-3xl font-bold mb-6 text-center text-green-700'>
					Adicionar Funcionário
				</h2>
				<form onSubmit={adicionarFuncionario} className='space-y-6'>
					<div>
						<label
							htmlFor='nome-funcionario'
							className='block text-lg font-semibold mb-2'
						>
							Nome
						</label>
						<input
							type='text'
							id='nome-funcionario'
							value={novoFuncionario.nome}
							onChange={(e) =>
								setNovoFuncionario({ ...novoFuncionario, nome: e.target.value })
							}
							className='w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 shadow-sm'
							required
						/>
					</div>
					<div>
						<label
							htmlFor='cargo-funcionario'
							className='block text-lg font-semibold mb-2'
						>
							Cargo
						</label>
						<input
							type='text'
							id='cargo-funcionario'
							value={novoFuncionario.cargo}
							onChange={(e) =>
								setNovoFuncionario({
									...novoFuncionario,
									cargo: e.target.value,
								})
							}
							className='w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 shadow-sm'
							required
						/>
					</div>
					<div className='flex justify-between gap-4'>
						<button
							type='submit'
							className='w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors shadow-md'
						>
							Adicionar
						</button>
						<button
							type='button'
							onClick={fecharModal}
							className='w-full bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors shadow-md'
						>
							Cancelar
						</button>
					</div>
				</form>
			</Modal>
		</section>
	);
}

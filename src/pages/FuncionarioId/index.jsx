import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import {
	FaCalendarAlt,
	FaClipboardList,
	FaMoneyBillWave,
	FaTrash,
} from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate para redirecionar após exclusão
import { db } from '../../api';
import { toast } from 'react-toastify';
import { buscaFuncionario } from './Functions/buscaFuncionarios';
import { limparGastos } from './Functions/limpaGastos';
import { excluirFuncionario } from './Functions/DeletaFuncionario';
import { atualizarGastos } from './Functions/AttGastos';
import { Helmet } from 'react-helmet-async';

export default function FuncionarioId() {
	const { id } = useParams();
	const navigate = useNavigate(); // Para redirecionar após exclusão
	const [funcionario, setFuncionario] = useState(null);
	const [loading, setLoading] = useState(true);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [novoDiaFaltado, setNovoDiaFaltado] = useState(0);
	const [novoItemPego, setNovoItemPego] = useState({ nome: '', peso: 0 });
	const [novoAlmocoDesconto, setNovoAlmocoDesconto] = useState(0);

	const abrirModal = () => setModalIsOpen(true);
	const fecharModal = () => setModalIsOpen(false);

	useEffect(() => {
		buscaFuncionario(id, db, setFuncionario, toast, setLoading);
	}, [id]);

	if (loading) {
		return <p className='text-center text-2xl mt-10'>Carregando...</p>;
	}

	if (!funcionario) {
		return (
			<p className='text-center text-2xl mt-10 font-semibold'>
				Erro ao procurar o funcionário
			</p>
		);
	}

	return (
		<div className='p-8 bg-gray-50 min-h-screen'>
			<Helmet>
				<title>Agroervas | Funcionario: {funcionario.nome}</title>
			</Helmet>
			<h1 className='text-4xl font-bold mb-6 text-center text-green-800'>
				Detalhes do Funcionário
			</h1>
			<div className='bg-white p-6 rounded-xl shadow-lg mb-8 max-w-2xl mx-auto'>
				<p className='text-xl font-semibold text-gray-700'>
					Nome: {funcionario.nome}
				</p>
				<p className='text-lg text-gray-600'>Cargo: {funcionario.cargo}</p>
			</div>

			<div className='flex justify-center space-x-4'>
				<button
					type='button'
					onClick={abrirModal}
					className='bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-500 transition-colors shadow-lg'
				>
					Ver Opções do Funcionário
				</button>

				<button
					type='button'
					onClick={() => excluirFuncionario(db, id, toast, navigate)}
					className='bg-red-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-red-500 transition-colors shadow-lg flex items-center gap-2'
				>
					<FaTrash /> Excluir Funcionário
				</button>
			</div>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={fecharModal}
				contentLabel='Opções do Funcionário'
				className='bg-white p-8 rounded-lg shadow-2xl max-w-lg mx-auto mt-20'
				overlayClassName='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center'
				appElement={document.getElementById('root')}
			>
				<h2 className='text-3xl font-bold mb-6 text-center text-green-700'>
					Opções do Funcionário
				</h2>
				<div className='space-y-6'>
					<div className='flex flex-col gap-2'>
						<label
							htmlFor='number'
							className='text-lg font-semibold text-gray-700'
						>
							Dias Faltados
						</label>
						<div className='flex items-center gap-4'>
							<FaCalendarAlt className='text-2xl text-green-500' />
							<input
								id='number'
								type='number'
								value={novoDiaFaltado}
								onChange={(e) => setNovoDiaFaltado(e.target.value)}
								className='w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200 focus:border-green-500'
								placeholder='Adicionar Dias Faltados'
							/>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<label
							htmlFor='nomeP'
							className='text-lg font-semibold text-gray-700'
						>
							Nome do Produto
						</label>
						<div className='flex items-center gap-4'>
							<FaClipboardList className='text-2xl text-green-500' />
							<input
								id='nomeP'
								type='text'
								value={novoItemPego.nome}
								onChange={(e) =>
									setNovoItemPego({ ...novoItemPego, nome: e.target.value })
								}
								className='w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200 focus:border-green-500'
								placeholder='Nome do Produto'
							/>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<label
							htmlFor='peso'
							className='text-lg font-semibold text-gray-700'
						>
							Peso do Produto (kg)
						</label>
						<div className='flex items-center gap-4'>
							<FaClipboardList className='text-2xl text-green-500' />
							<input
								id='peso'
								type='number'
								value={novoItemPego.peso}
								onChange={(e) =>
									setNovoItemPego({ ...novoItemPego, peso: e.target.value })
								}
								className='w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200 focus:border-green-500'
								placeholder='Peso do Produto'
							/>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<label
							htmlFor='almoco'
							className='text-lg font-semibold text-gray-700'
						>
							Almoço Desconto
						</label>
						<div className='flex items-center gap-4'>
							<FaMoneyBillWave className='text-2xl text-green-500' />
							<input
								id='almoco'
								type='number'
								step='0.01'
								value={novoAlmocoDesconto}
								onChange={(e) => setNovoAlmocoDesconto(e.target.value)}
								className='w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200 focus:border-green-500'
								placeholder='Adicionar Almoço Desconto'
							/>
						</div>
					</div>
				</div>

				<div className='flex justify-between mt-8 gap-5'>
					<button
						type='button'
						onClick={fecharModal}
						className='bg-gray-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-400 transition-colors shadow-md'
					>
						Fechar
					</button>
					<button
						type='button'
						onClick={() =>
							atualizarGastos(
								db,
								id,
								novoItemPego,
								novoDiaFaltado,
								novoAlmocoDesconto,
								setFuncionario,
								setNovoDiaFaltado,
								setNovoAlmocoDesconto,
								setNovoItemPego,
								funcionario,
								toast,
								fecharModal,
							)
						}
						className='bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-500 transition-colors shadow-md'
					>
						Atualizar Gastos
					</button>
					<button
						type='button'
						onClick={() => limparGastos(id, db, setFuncionario, toast)}
						className='bg-red-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-red-500 transition-colors shadow-md flex items-center gap-2'
					>
						<FaTrash /> Limpar Gastos
					</button>
				</div>
			</Modal>

			<div className='mt-16'>
				<h2 className='text-2xl font-bold mb-4 text-center text-green-700'>
					Histórico do Funcionário
				</h2>
				<table className='w-full bg-white rounded-xl shadow-lg max-w-4xl mx-auto'>
					<thead>
						<tr className='bg-gray-200'>
							<th className='py-3 px-6 border-b text-left text-gray-700'>
								Categoria
							</th>
							<th className='py-3 px-6 border-b text-left text-gray-700'>
								Detalhes
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='py-3 px-6 border-b'>Dias Faltados</td>
							<td className='py-3 px-6 border-b'>
								{funcionario.diasFaltados || 0} dias
							</td>
						</tr>
						<tr>
							<td className='py-3 px-6 border-b'>Itens Pegos</td>
							<td className='py-3 px-6 border-b'>
								{funcionario.itensPegos && funcionario.itensPegos.length > 0
									? funcionario.itensPegos.map((item, index) => (
											<div key={index}>
												{item.nome} - {item.peso} kg
											</div>
										))
									: 'Nenhum item pego'}
							</td>
						</tr>
						<tr>
							<td className='py-3 px-6 border-b'>Almoço Desconto</td>
							<td className='py-3 px-6 border-b'>
								{funcionario.almocoDesconto
									? `R$ ${funcionario.almocoDesconto.toFixed(2)}`
									: 'Sem desconto'}
							</td>
						</tr>
						<tr>
							<td className='py-3 px-6 border-b'>Total de Almoços Pegos</td>
							<td className='py-3 px-6 border-b'>
								{funcionario.totalAlmocosPegos || 0} vezes
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

import { doc, updateDoc } from 'firebase/firestore';

export const atualizarGastos = async (
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
) => {
	try {
		const refDoc = doc(db, 'funcionarios', id);

		// Validação: Certifique-se de que `itensPegos` seja um array válido
		const itensPegosAtuais = Array.isArray(funcionario.itensPegos)
			? funcionario.itensPegos
			: [];

		// Verificar se os novos dados são válidos
		const itemPegoValido = novoItemPego.nome && novoItemPego.peso;
		const diaFaltadoValido = novoDiaFaltado > 0;
		const almocoDescontoValido = novoAlmocoDesconto > 0;

		// Inicializar objeto de atualizações
		const atualizacoes = {};

		// Atualização de dias faltados
		if (diaFaltadoValido) {
			atualizacoes.diasFaltados =
				(funcionario.diasFaltados || 0) + Number(novoDiaFaltado);
		}

		// Atualização de almoço desconto
		if (almocoDescontoValido) {
			atualizacoes.almocoDesconto =
				(funcionario.almocoDesconto || 0) + Number(novoAlmocoDesconto);
			atualizacoes.totalAlmocosPegos = (funcionario.totalAlmocosPegos || 0) + 1;
		}

		// Atualização de itens pegos
		if (itemPegoValido) {
			atualizacoes.itensPegos = [
				...itensPegosAtuais,
				{ nome: novoItemPego.nome, peso: Number(novoItemPego.peso) },
			];
		}

		// Se houver atualizações, aplicar no Firestore
		if (Object.keys(atualizacoes).length > 0) {
			await updateDoc(refDoc, atualizacoes);

			// Atualizar estado local do funcionário
			setFuncionario((prev) => ({
				...prev,
				...atualizacoes,
			}));

			// Resetar campos
			setNovoDiaFaltado(0);
			setNovoItemPego({ nome: '', peso: 0 });
			setNovoAlmocoDesconto(0);

			toast.success('Gastos do funcionário atualizados com sucesso');
			fecharModal();
		} else {
			toast.warning('Nenhum dado válido para atualizar');
		}
	} catch (error) {
		toast.error('Erro ao atualizar os gastos do funcionário');
	}
};

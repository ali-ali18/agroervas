import { doc, updateDoc } from 'firebase/firestore';

export const limparGastos = async (id, db, setFuncionario,toast) => {
	try {
		const refDoc = doc(db, 'funcionarios', id);
		await updateDoc(refDoc, {
			diasFaltados: 0,
			itensPegos: [],
			almocoDesconto: 0,
			totalAlmocosPegos: 0,
		});
		setFuncionario((prev) => ({
			...prev,
			diasFaltados: 0,
			itensPegos: [],
			almocoDesconto: 0,
			totalAlmocosPegos: 0,
		}));
		toast.success('Gastos do funcionário limpos com sucesso');
	} catch (error) {
		toast.error(`Erro ao limpar os dados: ${error}`);
	}
};

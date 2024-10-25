import { deleteDoc, doc } from "firebase/firestore";

export const excluirFuncionario = async (db,id,toast,navigate) => {
    try {
        const refDoc = doc(db, 'funcionarios', id);
        await deleteDoc(refDoc);
        toast.success('Funcionário excluído com sucesso!');
        navigate('/dados'); // Redirecionar para a página inicial após a exclusão
    } catch (error) {
        toast.error('Erro ao excluir o funcionário');
    }
};

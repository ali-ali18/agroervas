import { doc, getDoc } from "firebase/firestore";

export const  buscaFuncionario = async (id,db,setFuncionario,toast,setLoading) => {
    try {
        const refDoc = doc(db, 'funcionarios', id);
        const snapDoc = await getDoc(refDoc);

        if (snapDoc.exists()) {
            setFuncionario({ id: snapDoc.id, ...snapDoc.data() });
        } else {
            toast.error('Funcionário não encontrado');
        }
        setLoading(false);
    } catch (error) {
        toast.error('Erro ao buscar informações do funcionário');
        setLoading(false);
    }
};
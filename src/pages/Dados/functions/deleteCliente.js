import { deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";


async function deletaCliente (db,id, navigate) {
    try {
        await deleteDoc(db, 'contatos', id)
        toast.success('Sucesso ao deletar os dados do cliente')
        navigate('/dados')
    } catch (erro) {
        toast.error('Ocorreu um erro ao tentar excluir os dados!')
    }
}

export default deletaCliente
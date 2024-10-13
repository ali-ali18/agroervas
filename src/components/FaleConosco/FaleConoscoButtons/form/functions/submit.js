import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../../../../api";

export const submit = async (e, nome, whatsapp, email, mensagem, setNome, setMensagem, setEmail, setWhatsapp) => {
    e.preventDefault();

    if (!nome || !whatsapp || !email || !mensagem) {
        toast.error('Por favor, preencha todos os campos');
        return
    }

    try {
        const docRef = await addDoc(collection(db, 'contatos'), {
            nome,
            whatsapp,
            email,
            mensagem,
        });
        toast.success(
            'Seus dados foram enviados, em breve nossos vendedores entrarão em contato com você',
        );
        setNome('');
        setWhatsapp('');
        setEmail('');
        setMensagem('');
    } catch (e) {
        toast.error(
            'Tivemos um erro ao tentar receber seus dados, tente novamente.',
        );
    }
};


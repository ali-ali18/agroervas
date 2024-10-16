import {signInWithEmailAndPassword} from 'firebase/auth'
import { toast } from 'react-toastify';


const loginSubmit = async (e, auth, email, senha, setErro, navigate) => {
    e.preventDefault();
    setErro('');

    try {
        await signInWithEmailAndPassword(auth, email, senha);
        toast.success('Login realizado com sucesso!');
        navigate('/dados')
    } catch (error) {
        setErro('Hmmmm... Parece que algo deu errado por aqui');
        toast.error('Algo deu errado! Verifique sua senha e email');
    }
};

export {loginSubmit}
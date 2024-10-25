import { collection, getDocs } from "firebase/firestore";

export const buscaFuncionarios = async (
  setFuncionarios,
  setLoading,
  toast,
  db,
) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'funcionarios'));
    const listaFuncionarios = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFuncionarios(listaFuncionarios);
  } catch (error) {
    toast.error(`Erro ao buscar os funcionários ${error}`);
  } finally {
    setLoading(false);
  }
};

export const handleSearch = (funcionarios, filtro) => {
  return funcionarios.filter((funcionario) =>
    funcionario.nome.toLowerCase().includes(filtro.toLowerCase()),
  );
};

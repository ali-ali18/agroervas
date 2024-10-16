export default function verificaAutenticacao(userLoading, user, navigate) {
	if (userLoading) return;

	if (!user) {
		navigate('/login-agroervas');
		return;
	}
}

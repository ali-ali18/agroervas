import HeaderFuncionarios from '../components/HeaderFuncionario';

export default function LayoutFuncionarios({children}) {
	return (
		<>
			<HeaderFuncionarios />
			<main>{children}</main>
		</>
	);
}

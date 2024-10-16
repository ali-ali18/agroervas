import Footer from '../components/footer';
import Cabecalho from '../components/header';

export default function LayoutPadrao({children}) {
	return (
		<>
			<Cabecalho />
			<main>{children}</main>
			<Footer />
		</>
	);
}

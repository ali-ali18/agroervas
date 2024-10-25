import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginUser from '../components/login';
import LayoutPadrao from '../layouts/layoutCabecalho';
import LayoutFuncionarios from '../layouts/layoutFuncionarios';
import Contato from '../pages/Contatos';
import Dados from '../pages/Dados';
import ClienteDados from '../pages/Dados/ClientDados';
import PageDireitoAutoral from '../pages/DireitosAutorais';
import Entrega from '../pages/Entrega/Index';
import Faltas from '../pages/Faltas';
import Funcionarios from '../pages/Funcionarios';
import Historia from '../pages/Historia';
import Informacoes from '../pages/Informacoes';
import FormasPagamento from '../pages/Pagamentos';
import Inicio from '../pages/inicio';
import FuncionarioId from '../pages/FuncionarioId';
import Page404 from '../pages/404';
import Entrada from '../pages/Entrada';
import Entradas from '../pages/VizualizarEntrada';

export default function Rotas() {
	return (
		<BrowserRouter>
			{/* AREA CLIENTES */}
			<Routes>
				<Route
					path='/'
					element={
						<LayoutPadrao>
							<Inicio />
						</LayoutPadrao>
					}
				/>
				<Route
					path='/historia'
					element={
						<LayoutPadrao>
							<Historia />
						</LayoutPadrao>
					}
				/>

				<Route
					path='/contato'
					element={
						<LayoutPadrao>
							<Contato />
						</LayoutPadrao>
					}
				/>
				<Route
					path='/imagens'
					element={
						<LayoutPadrao>
							<PageDireitoAutoral />
						</LayoutPadrao>
					}
				/>
				<Route
					path='/informacoes'
					element={
						<LayoutPadrao>
							<Informacoes />
						</LayoutPadrao>
					}
				/>
				<Route
					path='/pagamento'
					element={
						<LayoutPadrao>
							<FormasPagamento />
						</LayoutPadrao>
					}
				/>

				<Route
					path='/entrega'
					element={
						<LayoutPadrao>
							<Entrega />
						</LayoutPadrao>
					}
				/>
				{/* ÁREA FUNCIONARIOS */}
				<Route
					path='/login-agroervas'
					element={
						<LayoutFuncionarios>
							<LoginUser />
						</LayoutFuncionarios>
					}
				/>
				<Route
					path='/dados'
					element={
						<LayoutFuncionarios>
							<Dados />
						</LayoutFuncionarios>
					}
				/>
				<Route
					path='/dados/:id'
					element={
						<LayoutFuncionarios>
							<ClienteDados />
						</LayoutFuncionarios>
					}
				/>
				<Route
					path='/funcionarios'
					element={
						<LayoutFuncionarios>
							<Funcionarios />
						</LayoutFuncionarios>
					}
				/>
				<Route
					path='/funcionarios/:id'
					element={
						<LayoutFuncionarios>
							<FuncionarioId />
						</LayoutFuncionarios>
					}
				/>
				<Route
					path='/faltas'
					element={
						<LayoutFuncionarios>
							<Faltas />
						</LayoutFuncionarios>
					}
				/>
				<Route
					path='/entrada'
					element={
						<LayoutFuncionarios>
							<Entrada />
						</LayoutFuncionarios>
					}
				/>
				<Route
					path='/entradas'
					element={
						<LayoutFuncionarios>
							<Entradas />
						</LayoutFuncionarios>
					}
				/>
				{/* Route de rotas 404 */}
				<Route
					path='*'
					element={
						<LayoutPadrao>
							<Page404 />
						</LayoutPadrao>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

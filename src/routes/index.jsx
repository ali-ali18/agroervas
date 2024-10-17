import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from '../pages/inicio';
import LoginUser from '../components/login';
import LayoutPadrao from '../layouts/layoutCabecalho';
import Dados from '../pages/Dados';
import LayoutFuncionarios from '../layouts/layoutFuncionarios';
import ClienteDados from '../pages/Dados/ClientDados';
import Contato from '../pages/Contatos';
import Historia from '../pages/Historia';

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
			</Routes>
		</BrowserRouter>
	);
}

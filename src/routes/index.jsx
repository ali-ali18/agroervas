import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from '../pages/inicio';
import LoginUser from '../components/login';
import LayoutPadrao from '../layouts/layoutCabecalho';
import Dados from '../pages/Dados';
import LayoutFuncionarios from '../layouts/layoutFuncionarios';
import ClienteDados from '../pages/Dados/ClientDados';

export default function Rotas() {
	return (
		<BrowserRouter>
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
							<ClienteDados/>
						</LayoutFuncionarios>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

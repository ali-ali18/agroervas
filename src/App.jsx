import { ToastContainer } from 'react-toastify';
import Rotas from './routes';
import 'react-toastify/dist/ReactToastify.css'; 
import { HelmetProvider } from 'react-helmet-async';
function App() {
	return (
		<HelmetProvider>
			<ToastContainer autoClose={3000} />
			<Rotas />
		</HelmetProvider>
	);
}

export default App;

import { ToastContainer } from 'react-toastify';
import Rotas from './routes';
import 'react-toastify/dist/ReactToastify.css'; 
function App() {
	return (
		<div>
			<ToastContainer autoClose={3000} />
			<Rotas />
		</div>
	);
}

export default App;

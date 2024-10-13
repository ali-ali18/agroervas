import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "../pages/inicio";
import Cabecalho from "../components/header";
import Footer from "../components/footer";

export default function Rotas () {
    return (
        <BrowserRouter>
        <Cabecalho/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
import { createBrowserRouter } from "react-router-dom"; 
import Campanhas from "../Telaparatodos/Campanhas";
import Contato from "../Telaparatodos/Contato";
import Doacao from "../Telaparatodos/Doacao";
import Parceiros from "../Telaparatodos/Parceiros";
import TelaInicialT from "../Telaparatodos/Tela_inicial";


const router = createBrowserRouter([
    {path: "/", element: <TelaInicialT/>},
    {path: "/campanhas", element: <Campanhas/>},
    {path: "/doacao", element: <Doacao/>},
    {path: "/parceiros", element: <Parceiros/>},
    {path: "/contato", element: <Contato/>},
])

export default router;
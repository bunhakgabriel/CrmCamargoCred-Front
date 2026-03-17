import App from "../App";
import CadastroCliente from "../pages/cadastro-clientes/CadastroCliente";
import Clientes from "../pages/clientes/Clientes";
import Dashboard from "../pages/dashboard/Dashboard";
import { PATH } from "./rotas";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <h1>ERRO 404! Página não encontrada.</h1>,
    children: [
      {
        path: PATH.PAINEL,
        element: <Dashboard />
      },
      {
        path: PATH.NOVOCLIENTE,
        element: <CadastroCliente />
      },
      {
        path: PATH.CLIENTES,
        element: <Clientes />
      },
    ]
  }
];

export default routes;
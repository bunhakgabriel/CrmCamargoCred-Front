import App from "../App";
import CadastroCliente from "../pages/Clientes/CadastroCliente";
import Dashboard from "../pages/Dashboard/Dashboard";
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
    ]
  }
];

export default routes;
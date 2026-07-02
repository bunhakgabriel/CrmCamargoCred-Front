import App from "../App";
import CadastroCliente from "../pages/cadastro-clientes/CadastroCliente";
import { Clientes } from "../pages/Clientes/Clientes";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Login } from "../pages/login/Login";
import { Vendedores } from "../pages/Vendedores/Vendedores";
import { PrivateRoute } from "./PrivateRoutes";
import { PATH } from "./rotas";

const routes = [
  {
    path: "/login",
    element: <Login />
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <App />,
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
          {
            path: PATH.VENDEDORES,
            element: <Vendedores />
          }
        ]
      }
    ]
  }
];

export default routes;
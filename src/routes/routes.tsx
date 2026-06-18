import App from "../App";
import CadastroCliente from "../pages/cadastro-clientes/CadastroCliente";
import { Clientes } from "../pages/clientes/Clientes";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Login } from "../pages/login/Login";
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
        ]
      }
    ]
  }
];

export default routes;
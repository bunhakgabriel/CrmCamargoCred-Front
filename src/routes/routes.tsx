import App from "../App";
import Dashboard from "../pages/Dashboard/Dashboard";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <h1>ERRO 404! Página não encontrada.</h1>,
    children: [
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  }
];

export default routes;
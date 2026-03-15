import { Link, useLocation } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { PATH } from "../../routes/rotas";
import { FiUsers } from "react-icons/fi";
import clsx from "clsx";

function Header() {
  const location = useLocation();

  const menu = [
    { nome: "Painel", path: PATH.PAINEL, icon: <MdDashboard /> },
    { nome: "Novo Cliente", path: PATH.NOVOCLIENTE, icon: <FaUserPlus /> },
    { nome: "Clientes", path: PATH.CLIENTES, icon: <FiUsers /> },
  ];

  return (
    <header className="w-full bg-white border-b-[0.5px] border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center gap-12 px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-(--color-primary) text-white p-2 rounded-[10px]">
            <FiUsers size={20} />
          </div>
          <span className="font-bold text-lg">
            ConsigPro
          </span>
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-3">
          {menu.map((item) => {
            const ativo = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={clsx("flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm transition", {
                  "bg-gray-100 text-(--color-primary) font-medium": ativo,
                  "text-gray-500 hover:bg-gray-50": !ativo
                })}
              >
                {item.icon}
                {item.nome}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;

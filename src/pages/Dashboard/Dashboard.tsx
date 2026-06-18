import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../routes/rotas"
import { FiUsers } from "react-icons/fi";

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 px-8 py-8">

      {/* Título */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-700">Painel</h1>
        <p className="text-gray-500">
          Visão geral do seu sistema de clientes
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">

        {/* Total Clientes */}
        <div className="w-full md:w-75 flex items-center gap-4 px-6 py-4 bg-white border border-gray-200 rounded-xl shadow-sm">

          <div className="bg-(--color-primary) text-white p-3 rounded-lg">
            <FiUsers size={20} />
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Total de Clientes
            </p>

            <p className="text-2xl font-semibold text-gray-900">
              123
            </p>
          </div>

        </div>


        {/* Novo Cliente */}
        <div className="w-full md:w-75 flex items-center justify-center px-6 py-4 border border-dashed border-gray-200 rounded-xl bg-white">

          <button
            onClick={() => navigate(PATH.NOVOCLIENTE)}
            className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-(--color-secondary) hover:text-white transition cursor-pointer"
          >
            <FaUserPlus />
            Cadastrar Novo Cliente
          </button>

        </div>

      </div>

    </div>
  );
}
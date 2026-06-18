import { FaUserPlus } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../routes/rotas";
import GridClientes from "./componentes/grid-clientes/GridClientes";

export function Clientes() {
    const navigate = useNavigate()

    return (
        <div className="py-4 px-8">
            <div className="flex justify-between items-center">
                <div className="w-full flex items-center gap-4 py-4">

                    <div className="bg-(--color-primary) text-white p-2 rounded-lg">
                        <FiUsers size={20} />
                    </div>

                    <div>
                        <p className="text-xl font-semibold text-gray-700">
                            Clientes
                        </p>
                        <p className="text-sm text-gray-500">
                            Gerencie seus clientes potenciais
                        </p>
                    </div>
                </div>
                
                <div>
                    <button
                    onClick={() => navigate(PATH.NOVOCLIENTE)}
                    className="flex items-center h-10 w-31 text-xs gap-2 px-4 py-2 border border-gray-300 rounded-lg text-white bg-(--color-primary) hover:opacity-90 transition cursor-pointer"
                >
                    <FaUserPlus />
                    <span>Novo Cliente</span>
                </button>
                </div>
            </div>

            <GridClientes />
        </div>
    )
}
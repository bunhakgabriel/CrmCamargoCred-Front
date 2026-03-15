import { FaUserPlus } from "react-icons/fa";

export default function CadastroCliente() {
    return (
        <div className="p-8 flex justify-center">
            <div className="p-4 w-7/10 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                    <div className="bg-(--color-secondary) w-12 h-12 rounded-lg flex justify-center items-center">
                        <FaUserPlus color="white" size={20} />
                    </div>
                    <div>
                        <h1 className="font-semibold text-2xl">Novo Cliente</h1>
                        <span className="text-gray-500 text-sm">Cadastre um novo cliente potencial para empréstimo consignado</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
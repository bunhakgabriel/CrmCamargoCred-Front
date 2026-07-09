import { FaUserPlus } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import GridVendedores from "./componentes/GridVendedores";
import { useState } from "react";

export function Vendedores() {
    const [modalVendedorIsOpen, setModalVendedorIsOpen] = useState(false);

    return (
        <div className="py-4 px-8">
            <div className="flex justify-between items-center">
                <div className="w-full flex items-center gap-4 py-4">

                    <div className="bg-(--color-primary) text-white p-2 rounded-lg">
                        <FiUsers size={20} />
                    </div>

                    <div>
                        <p className="text-xl font-semibold text-gray-700">
                            Vendedores
                        </p>
                        <p className="text-sm text-gray-500">
                            Gerencie seus vendedores
                        </p>
                    </div>
                </div>

                <div>
                    <button
                        onClick={() => setModalVendedorIsOpen(true)}
                        className="flex items-center h-10 w-35 text-xs gap-2 px-4 py-2 border border-gray-300 rounded-lg text-white bg-(--color-primary) hover:opacity-90 transition cursor-pointer"
                    >
                        <FaUserPlus />
                        <span>Novo Vendedor</span>
                    </button>
                </div>
            </div>
            
            <GridVendedores 
                modalVendedorIsOpen={modalVendedorIsOpen} 
                setModalVendedorIsOpen={setModalVendedorIsOpen} 
            />
        </div>
    )
}
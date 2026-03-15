import { FaUserPlus } from "react-icons/fa";
import { LuSave } from "react-icons/lu";

export default function CadastroCliente() {
    return (
        <div className="p-8 flex justify-center">
            <div className="flex flex-col gap-5 p-4 w-7/10 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                    <div className="bg-(--color-secondary) w-12 h-12 rounded-lg flex justify-center items-center">
                        <FaUserPlus color="white" size={20} />
                    </div>
                    <div>
                        <h1 className="font-semibold text-2xl text-gray-700">Novo Cliente</h1>
                        <span className="text-gray-500 text-sm">Cadastre um novo cliente potencial para empréstimo consignado</span>
                    </div>
                </div>

                <form className="flex flex-col gap-5">

                    <div className="flex flex-col gap-3">
                        <h3 className="text-gray-500 font-semibold text-sm">DADOS PESSOAIS</h3>

                        <div className="grid grid-cols-12 gap-3">
                            <div className="flex flex-col gap-1 col-span-12">
                                <label className="text-xs text-gray-700">Nome Cliente</label>
                                <input className="h-10 border border-gray-300 bg-gray-50 rounded-lg px-2 py-0.5 text-sm" type="text" />
                            </div>

                            <div className="flex flex-col gap-1 col-span-6">
                                <label className="text-xs text-gray-700">CPF</label>
                                <input className="h-10 border border-gray-300 bg-gray-50 rounded-lg px-2 py-0.5 text-sm" type="text" />
                            </div>

                            <div className="flex flex-col gap-1 col-span-6">
                                <label className="text-xs text-gray-700">RG</label>
                                <input className="h-10 border border-gray-300 bg-gray-50 rounded-lg px-2 py-0.5 text-sm" type="text" />
                            </div>

                            <div className="flex flex-col gap-1 col-span-4">
                                <label className="text-xs text-gray-700">Naturalidade</label>
                                <input className="h-10 border border-gray-300 bg-gray-50 rounded-lg px-2 py-0.5 text-sm" type="text" />
                            </div>

                            <div className="flex flex-col gap-1 col-span-4">
                                <label className="text-xs text-gray-700">Fone</label>
                                <input className="h-10 border border-gray-300 bg-gray-50 rounded-lg px-2 py-0.5 text-sm" type="text" />
                            </div>

                            <div className="flex flex-col gap-1 col-span-4">
                                <label className="text-xs text-gray-700">Data de Nascimento</label>
                                <input className="h-10 border border-gray-300 bg-gray-50 rounded-lg px-2 py-0.5 text-sm" type="text" />
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-end">
                        <button className="cursor-pointer text-sm flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-(--color-primary) hover:opacity-90 transition">
                            <LuSave size={16} /> Salvar
                        </button>
                    </div>
                </form>

            </div>

        </div>
    )
}
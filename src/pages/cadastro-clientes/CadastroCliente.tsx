import { FaUserPlus } from "react-icons/fa";
import { LuSave } from "react-icons/lu";
import { yupResolver } from '@hookform/resolvers/yup';
import useMask from "../../hooks/useMask";
import { useForm } from "react-hook-form";
import { clienteSchema, type IClienteForm } from "./schema/ClienteSchema";
import InputSimples from "../../componentes/input-simples/InputSimples";
import type { ICliente } from "../../interfaces/ICliente";
import { parseClienteRequest } from "./parser/parseCliente";

export default function CadastroCliente() {
    const { mask } = useMask()

    const { register, handleSubmit, formState: { errors } } = useForm<IClienteForm>({
        resolver: yupResolver(clienteSchema),
        mode: 'onChange'
    })

    function onSubmit(data: IClienteForm) {
        const cliente: ICliente = parseClienteRequest(data)
        console.log(cliente)
    }

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

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

                    <div className="flex flex-col gap-3">
                        <h3 className="text-gray-500 font-semibold text-sm">DADOS PESSOAIS</h3>

                        <div className="grid grid-cols-12 gap-3">

                            <InputSimples
                                col={12}
                                label="Nome Cliente"
                                name="nome"
                                register={register}
                                error={errors.nome}
                                maxLength={100}
                                mask={(value) => mask(value, 'apenasLetras')}
                            />

                            <InputSimples
                                col={6}
                                label="CPF"
                                name="cpf"
                                register={register}
                                error={errors.cpf}
                                maxLength={14}
                                mask={(value) => mask(value, 'cpf')}
                            />

                            <InputSimples
                                col={6}
                                label="RG"
                                name="rg"
                                register={register}
                                error={errors.rg}
                                maxLength={12}
                                mask={(value) => mask(value, 'rg')}
                            />

                            <InputSimples
                                col={4}
                                label="Naturalidade"
                                name="naturalidade"
                                register={register}
                                error={errors.naturalidade}
                            />

                            <InputSimples
                                col={4}
                                label="Fone"
                                name="telefone"
                                register={register}
                                error={errors.telefone}
                                maxLength={15}
                                mask={(value) => mask(value, 'telefone')}
                            />

                            <InputSimples
                                col={4}
                                label="Data de Nascimento"
                                name="dataNascimento"
                                register={register}
                                error={errors.dataNascimento}
                                maxLength={10}
                                mask={(value) => mask(value, 'date')}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="cursor-pointer text-sm flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-(--color-primary) hover:opacity-90 transition">
                            <LuSave size={16} /> Salvar
                        </button>
                    </div>
                </form>

            </div>

        </div>
    )
}
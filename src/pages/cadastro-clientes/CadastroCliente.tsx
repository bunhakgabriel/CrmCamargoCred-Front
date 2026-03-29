import { FaUserPlus } from "react-icons/fa";
import { LuSave } from "react-icons/lu";
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from "react-hook-form";
import { clienteSchema, type IClienteForm } from "./schema/ClienteSchema";
import InputSimples from "../../componentes/input-simples/InputSimples";
import type { ICliente } from "../../interfaces/ICliente";
import { parseClienteRequest, parseClienteResponse } from "./parser/parseCliente";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ClienteService from "./services/clienteService";
import { toast } from "sonner";
import { mask } from "../../utils/masks";
import clsx from "clsx";

type cadastroClienteProps = {
    cliente: ICliente | null
    onCloseModal?: () => void
}

export default function CadastroCliente({ cliente, onCloseModal }: cadastroClienteProps) {
    const queryClient = useQueryClient();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IClienteForm>({
        resolver: yupResolver(clienteSchema),
        mode: 'onChange',
        defaultValues: cliente ? parseClienteResponse(cliente) : {}
    })

    const mutation = useMutation({
        mutationFn: (cliente: ICliente) => ClienteService.salvarCliente(cliente),
        onSuccess: () => {
            toast.success('Cliente salvo com sucesso!')
            queryClient.invalidateQueries({ queryKey: ['clientes'] });
            reset()

            if (cliente && onCloseModal) {
                onCloseModal()
            }
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    function onSubmit(data: IClienteForm) {
        const cliente: ICliente = parseClienteRequest(data)
        mutation.mutate(cliente)
    }

    return (
        <div className="p-8 flex justify-center">
            <div className={clsx("flex flex-col gap-5 p-4 border border-gray-200 rounded-lg", {
                'w-7/10': !cliente,
                'w-full': cliente
            })}>
                <div className="flex items-center gap-3">
                    <div className="bg-(--color-secondary) w-12 h-12 rounded-lg flex justify-center items-center">
                        <FaUserPlus color="white" size={20} />
                    </div>
                    <div>
                        {!cliente ? (
                            <>
                                <h1 className="font-semibold text-2xl text-gray-700">Novo Cliente</h1>
                                <span className="text-gray-500 text-sm">Cadastre um novo cliente potencial para empréstimo consignado</span>
                            </>
                        ) : (
                            <>
                                <h1 className="font-semibold text-2xl text-gray-700">Editar Cliente</h1>
                                <span className="text-gray-500 text-sm">Edite um cliente existente</span>
                            </>
                        )}
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

                    <div className="flex flex-col gap-3">
                        <h3 className="text-gray-500 font-semibold text-sm">DADOS PESSOAIS</h3>

                        <div className="flex flex-col gap-3">
                            {/* <div className="grid grid-cols-12 gap-3"> */}

                            <div>
                                <InputSimples
                                    col={12}
                                    label="Nome Cliente"
                                    name="nome"
                                    register={register}
                                    error={errors.nome}
                                    maxLength={100}
                                    mask={(value) => mask(value, 'apenasLetras')}
                                />
                            </div>

                            <div className="flex gap-3">
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
                            </div>

                            <div className="flex gap-3">
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
                                    name="data_nascimento"
                                    register={register}
                                    error={errors.data_nascimento}
                                    maxLength={10}
                                    mask={(value) => mask(value, 'date')}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 justify-end">
                        <button type="submit" className="cursor-pointer text-sm flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-(--color-primary) hover:opacity-90 transition">
                            <LuSave size={16} /> Salvar
                        </button>
                        {cliente && (
                            <button onClick={onCloseModal} className="cursor-pointer text-sm flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-(--color-tertiary) hover:opacity-90 transition">
                                Cancelar
                            </button>
                        )}
                    </div>
                </form>

            </div>

        </div>
    )
}
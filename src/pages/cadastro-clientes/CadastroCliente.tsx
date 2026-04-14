import { FaUserPlus } from "react-icons/fa";
import { LuSave } from "react-icons/lu";
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm, type Resolver, FormProvider } from "react-hook-form";
import { clienteSchema, type IClienteForm } from "./schema/ClienteSchema";
import type { ICliente } from "../../interfaces/ICliente";
import { parseClienteRequest, parseClienteResponse } from "./parser/parseCliente";
import { useMutation } from "@tanstack/react-query";
import ClienteService from "./services/clienteService";
import { toast } from "sonner";
import clsx from "clsx";
import InformacoesBasicas from "./etapas/etapa-1/InformacoesBasicas";
import InformacoesBancarias from "./etapas/etapa-2/InformacoesBancarias";
import InformacoesContato from "./etapas/etapa-3/InformacoesContato";
import InformacoesAdicionais from "./etapas/etapa-4/InformacoesAdicionais";
import Documentos from "./etapas/etapa-5/Documentos";

type cadastroClienteProps = {
    cliente?: ICliente | null
    onCloseModal?: () => void
    resetGrid?: () => void
}

export default function CadastroCliente({ cliente, onCloseModal, resetGrid }: cadastroClienteProps) {
    const form = useForm<IClienteForm>({
        resolver: yupResolver(clienteSchema) as Resolver<IClienteForm>,
        mode: 'onChange',
        defaultValues: cliente ? parseClienteResponse(cliente) : {}
    })

    const { handleSubmit, reset } = form

    const mutation = useMutation({
        mutationFn: (cliente: ICliente) => ClienteService.salvarCliente(cliente),
        onSuccess: () => {
            toast.success('Cliente salvo com sucesso!')
            reset()

            if (cliente && onCloseModal && resetGrid) {
                onCloseModal()
                resetGrid()
            }
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    function onSubmit(data: IClienteForm) {
        const cliente: ICliente = parseClienteRequest(data)

        console.log('Cliente: ', data)
        mutation.mutate(cliente)
    }

    return (
        <FormProvider {...form}>
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

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
                    
                        <InformacoesBasicas />
                        <InformacoesBancarias />
                        <InformacoesContato />
                        <InformacoesAdicionais />
                        <Documentos />

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
        </FormProvider>
    )
}
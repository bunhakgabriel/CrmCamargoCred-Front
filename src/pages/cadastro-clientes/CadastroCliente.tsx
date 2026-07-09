import { FaUserPlus } from "react-icons/fa";
import { LuSave } from "react-icons/lu";
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm, type Resolver, FormProvider } from "react-hook-form";
import { clienteSchema, type IClienteForm } from "./schema/ClienteSchema";
import type { ICliente } from "../../interfaces/ICliente";
import { parseClienteRequest, parseClienteResponse } from "./parser/parseCliente";
import { useMutation, useQuery } from "@tanstack/react-query";
import ClienteService from "./services/clienteService";
import { toast } from "sonner";
import clsx from "clsx";
import InformacoesBasicas from "./etapas/etapa-1/InformacoesBasicas";
import InformacoesBancarias from "./etapas/etapa-2/InformacoesBancarias";
import InformacoesContato from "./etapas/etapa-3/InformacoesContato";
import InformacoesAdicionais from "./etapas/etapa-4/InformacoesAdicionais";
import Documentos from "./etapas/etapa-5/Documentos";
import type { ArquivoUpload } from "../../types/ArquivoUpload";
import { useEffect } from "react";
import VendedorService from "../cadastro-vendedores/service/vendedorService";

type cadastroClienteProps = {
    cliente?: ICliente & { documentos?: ArquivoUpload[] } | null
    onCloseModal?: () => void
    resetGrid?: () => void
}

export default function CadastroCliente({ cliente, onCloseModal, resetGrid }: cadastroClienteProps) {

    const form = useForm<IClienteForm>({
        resolver: yupResolver(clienteSchema) as Resolver<IClienteForm>,
        mode: 'onChange'
    })

    useEffect(() => {
        if (cliente) {
            form.reset(parseClienteResponse(cliente));
        } else {
            form.reset(defaultValues());
        }
    }, [cliente]);

    function defaultValues() {
        return {
            info_bancarias: [
                {
                    id: undefined,
                    banco: 0,
                    agencia: '',
                    tipo_conta: '',
                    conta: ''
                }
            ],
            info_beneficio: [
                {
                    id: undefined,
                    beneficio: 0,
                    convenio: 0,
                    margem: ''
                }
            ]
        } as IClienteForm
    }

    const { handleSubmit, reset } = form

    const { data } = useQuery({
        queryKey: ["vendedores"],
        queryFn: () => {
            return VendedorService.buscarVendedores({ skip: 0, take: 50 });
        },
        refetchOnWindowFocus: false,
    });

    const vendedores = data?.data
        .filter(x => x.id_vendedor)
        .map(x => ({ value: x.id_vendedor!, label: x.nome })) || []; 

    const mutation = useMutation({
        mutationFn: ({ cliente }: { cliente: ICliente, documentos: ArquivoUpload[] }) => ClienteService.salvarCliente(cliente),
        onSuccess: (data, variables) => {
            const { documentos } = variables
            const idCliente = data.data.id_cliente

            const isEdicao = !!cliente;
            const temDocumentos = documentos && documentos.length > 0;

            if ((isEdicao || temDocumentos) && idCliente) {
                uploadDocumentos(idCliente, documentos)
            } else {
                toast.success('Cliente salvo com sucesso!')
                resetFormAndModal()
            }
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    const mutationUploadDocumentos = useMutation({
        mutationFn: (data: { idCliente: number, formData: FormData }) => ClienteService.uploadDocumentos(data.idCliente, data.formData),
        onSuccess: () => {
            toast.success('Cliente salvo com sucesso!')
            resetFormAndModal()
        },
        onError: (error) => {
            toast.success('Cliente salvo com sucesso!')
            toast.error('Erro ao salvar documentos: ' + error.message)
            resetFormAndModal()
        },
    })


    function uploadDocumentos(idCliente: number, documentos: ArquivoUpload[]) {
        const formData = new FormData()

        documentos.filter(a => a.file || a.url).forEach(doc => {
            if (doc.file) {
                formData.append('documentos', doc.file as File)
            } else if (doc.url) {
                formData.append('urls', doc.url)
            }
        })

        mutationUploadDocumentos.mutate({ idCliente, formData })
    }

    function onSubmit(data: IClienteForm) {
        const cliente: ICliente = parseClienteRequest(data)
        mutation.mutate({ cliente, documentos: data.documentos || [] })
    }

    function resetFormAndModal() {
        reset()

        if (cliente && onCloseModal && resetGrid) {
            onCloseModal()
            resetGrid()
        }
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

                        <InformacoesBasicas vendedores={vendedores} />
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
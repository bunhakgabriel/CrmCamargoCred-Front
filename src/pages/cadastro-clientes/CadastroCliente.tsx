import { FaUserPlus } from "react-icons/fa";
import { LuSave } from "react-icons/lu";
import { yupResolver } from '@hookform/resolvers/yup';

import { Controller, useForm } from "react-hook-form";
import { clienteSchema, type IClienteForm } from "./schema/ClienteSchema";
import InputSimples from "../../componentes/input-simples/InputSimples";
import type { ICliente } from "../../interfaces/ICliente";
import { parseClienteRequest, parseClienteResponse } from "./parser/parseCliente";
import { useMutation } from "@tanstack/react-query";
import ClienteService from "./services/clienteService";
import { toast } from "sonner";
import { mask } from "../../utils/masks";
import clsx from "clsx";
import Select from 'react-select';
import { sexoOptions, ufOptions, type OptionSelect } from "./data/data";

type cadastroClienteProps = {
    cliente?: ICliente | null
    onCloseModal?: () => void
    resetGrid?: () => void
}

export default function CadastroCliente({ cliente, onCloseModal, resetGrid }: cadastroClienteProps) {
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm<IClienteForm>({
        resolver: yupResolver(clienteSchema),
        mode: 'onChange',
        defaultValues: cliente ? parseClienteResponse(cliente) : {}
    })

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
        // mutation.mutate(cliente)
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
                        <h3 className="text-gray-500 font-semibold text-sm">INFORMAÇÕES BÁSICAS DO CLIENTE</h3>

                        <div className="flex flex-col gap-3">
                            {/* <div className="grid grid-cols-12 gap-3"> */}

                            {/* Linha 1 */}
                            <div className="flex gap-3">
                                <InputSimples
                                    label="CPF"
                                    name="cpf"
                                    register={register}
                                    error={errors.cpf}
                                    maxLength={14}
                                    mask={(value) => mask(value, 'cpf')}
                                />
                                <InputSimples
                                    label="Nome Cliente"
                                    name="nome"
                                    register={register}
                                    error={errors.nome}
                                    maxLength={100}
                                    mask={(value) => mask(value, 'apenasLetras')}
                                />
                            </div>

                            {/* Linha 2 */}
                            <div className="flex gap-3">
                                <Controller
                                    name="sexo"
                                    rules={{ required: true }}
                                    control={control}
                                    render={({ field }) => (
                                        <div className="flex flex-col gap-1 w-full">
                                            <label className="text-xs text-gray-700">Sexo</label>
                                            <Select<OptionSelect>
                                                {...field}
                                                options={sexoOptions}
                                                isClearable
                                                placeholder="Selecione"
                                                onChange={(option) => field.onChange(option?.value)}
                                                value={sexoOptions.find(opt => opt.value === field.value) || null}
                                            />
                                            {errors.uf_rg && (
                                                <span className="text-red-500 text-xs">{errors.sexo?.message}</span>
                                            )}
                                        </div>
                                    )}
                                />
                                <InputSimples
                                    label="Data de Nascimento"
                                    name="data_nascimento"
                                    register={register}
                                    error={errors.data_nascimento}
                                    maxLength={10}
                                    mask={(value) => mask(value, 'date')}
                                />
                                <InputSimples
                                    label="Naturalidade"
                                    name="naturalidade"
                                    register={register}
                                    error={errors.naturalidade}
                                />
                                <InputSimples
                                    label="Nacionalidade"
                                    name="nacionalidade"
                                    register={register}
                                    error={errors.nacionalidade}
                                />
                            </div>

                            {/* Linha 3 */}
                            <div className="flex gap-3">
                                <InputSimples
                                    label="RG"
                                    name="rg"
                                    register={register}
                                    error={errors.rg}
                                    maxLength={12}
                                    mask={(value) => mask(value, 'rg')}
                                />
                                <InputSimples
                                    label="Data emissão"
                                    name="data_emissao_rg"
                                    register={register}
                                    error={errors.data_emissao_rg}
                                    maxLength={10}
                                    mask={(value) => mask(value, 'date')}
                                />
                                <InputSimples
                                    label="Orgão emissor"
                                    name="orgao_emissor_rg"
                                    register={register}
                                    error={errors.orgao_emissor_rg}
                                    maxLength={12}
                                />

                                <Controller
                                    name="uf_rg"
                                    rules={{ required: true }}
                                    control={control}
                                    render={({ field }) => (
                                        <div className="flex flex-col gap-1 w-full">
                                            <label className="text-xs text-gray-700">UF</label>
                                            <Select<OptionSelect>
                                                {...field}
                                                options={ufOptions}
                                                isClearable
                                                placeholder="Selecione uma UF"
                                                onChange={(option) => field.onChange(option?.value)}
                                                value={ufOptions.find(opt => opt.value === field.value) || null}
                                            />
                                            {errors.uf_rg && (
                                                <span className="text-red-500 text-xs">{errors.uf_rg?.message}</span>
                                            )}
                                        </div>
                                    )}
                                />
                            </div>


                            {/* Linha 4 */}
                            <div className="flex gap-3">
                                <InputSimples
                                    label="Observações"
                                    name="observacoes"
                                    register={register}
                                    type="textArea"
                                    error={errors.observacoes}
                                />
                                <InputSimples 
                                    label="E-mail"
                                    name="email"
                                    register={register}
                                    error={errors.email}
                                />
                            </div>


                            {/* Linha 4 */}
                            <div className="flex gap-3">
                                <InputSimples
                                    label="Fone"
                                    name="telefone"
                                    register={register}
                                    error={errors.telefone}
                                    maxLength={15}
                                    mask={(value) => mask(value, 'telefone')}
                                />
                            </div>

                            <div className="flex gap-3">
                                <InputSimples
                                    label="Nome do Cônjuge"
                                    name="conjugue.nome"
                                    register={register}
                                    error={errors.conjugue?.nome}
                                    maxLength={100}
                                />
                                <InputSimples
                                    label="Doc. Identidade (Tipo / Nº / Data Emissão)"
                                    name="conjugue.documento"
                                    register={register}
                                    error={errors.conjugue?.documento}
                                    maxLength={100}
                                />
                            </div>

                            <div className="flex gap-3">
                                <InputSimples
                                    label="Naturalidade (cidade e estado)"
                                    name="conjugue.naturalidade"
                                    register={register}
                                    error={errors.conjugue?.naturalidade}
                                    maxLength={100}
                                />
                                <InputSimples
                                    label="Data Nascimento"
                                    name="conjugue.data_nascimento"
                                    register={register}
                                    error={errors.conjugue?.nome}
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
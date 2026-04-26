import { Controller, useFormContext } from "react-hook-form";
import InputSimples from "../../../../componentes/input-simples/InputSimples";
import { nacionalidadeOptions, sexoOptions, ufOptions, type OptionSelectNumber, type OptionSelectString } from "../../data/data";
import Select from 'react-select';
import { type IClienteForm } from "../../schema/ClienteSchema";
import { mask } from "../../../../utils/masks";

export default function InformacoesBasicas() {

    const { register, formState: { errors }, control } = useFormContext<IClienteForm>();

    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-gray-500 font-semibold text-sm">INFORMAÇÕES BÁSICAS DO CLIENTE</h3>

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

            <div className="flex gap-3">
                <Controller
                    name="sexo"
                    rules={{ required: true }}
                    control={control}
                    render={({ field }) => (
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-xs text-gray-700">Sexo</label>
                            <Select<OptionSelectString>
                                {...field}
                                options={sexoOptions}
                                isClearable
                                placeholder="Selecione"
                                onChange={(option) => field.onChange(option?.value)}
                                value={sexoOptions.find(opt => opt.value === field.value) || null}
                            />
                            {errors.sexo && (
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

                <Controller
                    name="nacionalidade"
                    rules={{ required: false }}
                    control={control}
                    render={({ field }) => (
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-xs text-gray-700">Nacionalidade</label>
                            <Select<OptionSelectNumber>
                                {...field}
                                options={nacionalidadeOptions}
                                isClearable
                                placeholder="Selecione"
                                onChange={(option) => field.onChange(option?.value)}
                                value={nacionalidadeOptions.find(opt => opt.value === field.value) || null}
                            />
                            {errors.nacionalidade && (
                                <span className="text-red-500 text-xs">{errors.nacionalidade?.message}</span>
                            )}
                        </div>
                    )}
                />


            </div>

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
                            <Select<OptionSelectString>
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

            <div className="flex gap-3">
                <InputSimples
                    label="Telefone 1"
                    name="telefone_1"
                    register={register}
                    error={errors.telefone_1}
                    maxLength={15}
                    mask={(value) => mask(value, 'telefone')}
                />
                <InputSimples
                    label="Telefone 2"
                    name="telefone_2"
                    register={register}
                    error={errors.telefone_2}
                    maxLength={15}
                    mask={(value) => mask(value, 'telefone')}
                />
                <InputSimples
                    label="Telefone 3"
                    name="telefone_3"
                    register={register}
                    error={errors.telefone_3}
                    maxLength={15}
                    mask={(value) => mask(value, 'telefone')}
                />
            </div>

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
        </div>
    )
}
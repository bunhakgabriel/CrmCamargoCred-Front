import { Controller, useFormContext } from "react-hook-form";
import InputSimples from "../../../../componentes/input-simples/InputSimples";
import { enderecoCorrespondenciaOptions, estadoCivilOptions, grauInstrucaoOptions, type OptionSelectNumber, type OptionSelectString } from "../../data/data";
import type { IClienteForm } from "../../schema/ClienteSchema";
import Select from 'react-select';
import { mask } from "../../../../utils/masks";

export default function InformacoesAdicionais() {

    const { register, formState: { errors }, control } = useFormContext<IClienteForm>();

    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-gray-500 font-semibold text-sm">INFORMAÇÕES ADICIONAIS</h3>

            <div className="flex gap-3">
                <InputSimples
                    label="Nome do Pai"
                    name="nome_pai"
                    register={register}
                    error={errors.nome_pai}
                    maxLength={100}
                />
                <InputSimples
                    label="Nome da mãe"
                    name="nome_mae"
                    register={register}
                    error={errors.nome_mae}
                    maxLength={100}
                />
            </div>

            <div className="flex gap-3">
                <Controller
                    name="grau_instrucao"
                    control={control}
                    render={({ field }) => (
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-xs text-gray-700">Grau de Instrução</label>
                            <Select<OptionSelectNumber>
                                {...field}
                                options={grauInstrucaoOptions}
                                isClearable
                                placeholder="Selecione"
                                onChange={(option) => field.onChange(option?.value)}
                                value={grauInstrucaoOptions.find(opt => opt.value === field.value) || null}
                            />
                            {errors.grau_instrucao && (
                                <span className="text-red-500 text-xs">{errors.grau_instrucao?.message}</span>
                            )}
                        </div>
                    )}
                />
                <Controller
                    name="estado_civil"
                    control={control}
                    render={({ field }) => (
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-xs text-gray-700">Estado civil</label>
                            <Select<OptionSelectNumber>
                                {...field}
                                options={estadoCivilOptions}
                                isClearable
                                placeholder="Selecione"
                                onChange={(option) => field.onChange(option?.value)}
                                value={estadoCivilOptions.find(opt => opt.value === field.value) || null}
                            />
                            {errors.estado_civil && (
                                <span className="text-red-500 text-xs">{errors.estado_civil?.message}</span>
                            )}
                        </div>
                    )}
                />
                <Controller
                    name="endereco_correspondencia"
                    control={control}
                    render={({ field }) => (
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-xs text-gray-700">End. p/Correspondência</label>
                            <Select<OptionSelectString>
                                {...field}
                                options={enderecoCorrespondenciaOptions}
                                isClearable
                                placeholder="Selecione"
                                onChange={(option) => field.onChange(option?.value)}
                                value={enderecoCorrespondenciaOptions.find(opt => opt.value === field.value) || null}
                            />
                            {errors.endereco_correspondencia && (
                                <span className="text-red-500 text-xs">{errors.endereco_correspondencia?.message}</span>
                            )}
                        </div>
                    )}
                />
                <InputSimples
                    label="Nº Dependentes"
                    name="num_dependentes"
                    register={register}
                    error={errors.num_dependentes}
                    maxLength={3}
                    mask={(value) => mask(value, 'apenasNumeros')}
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
    )
}
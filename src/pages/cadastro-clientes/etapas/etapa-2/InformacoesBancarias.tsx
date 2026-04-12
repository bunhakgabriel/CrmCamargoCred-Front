import { Controller, useFormContext } from "react-hook-form";
import type { IClienteForm } from "../../schema/ClienteSchema";
import Select from 'react-select';
import { bancosOptions, beneficiosOptions, conveniosOptions, tipoContaOptions, type OptionSelect } from "../../data/data";
import InputSimples from "../../../../componentes/input-simples/InputSimples";
import { mask } from "../../../../utils/masks";

export default function InformacoesBancarias(){

    const { register, formState: { errors }, control } = useFormContext<IClienteForm>();

    return (
        <div className="flex flex-col gap-3">
                            <h3 className="text-gray-500 font-semibold text-sm">INFORMAÇÕES BANCARIAS</h3>

                            <div className="flex gap-3">
                                <div className="w-1/2">
                                    <Controller
                                        name="info_bancarias.banco"
                                        control={control}
                                        render={({ field }) => (
                                            <div className="flex flex-col gap-1 w-full">
                                                <label className="text-xs text-gray-700">Banco</label>
                                                <Select<OptionSelect>
                                                    {...field}
                                                    options={bancosOptions}
                                                    isClearable
                                                    placeholder="Selecione"
                                                    onChange={(option) => field.onChange(option?.value)}
                                                    value={bancosOptions.find(opt => opt.value === field.value) || null}
                                                />
                                                {errors.info_bancarias?.banco && (
                                                    <span className="text-red-500 text-xs">{errors.info_bancarias?.banco?.message}</span>
                                                )}
                                            </div>
                                        )}
                                    />
                                </div>
                                <div className="w-[15%]">
                                    <InputSimples
                                        label="Agencia"
                                        name="info_bancarias.agencia"
                                        register={register}
                                        error={errors.info_bancarias?.agencia}
                                        maxLength={8}
                                        mask={(value) => mask(value, 'apenasNumeros')}
                                    />
                                </div>
                                <div className="w-[15%]">
                                    <InputSimples
                                        label="Nº Conta"
                                        name="info_bancarias.conta"
                                        register={register}
                                        error={errors.info_bancarias?.conta}
                                        maxLength={12}
                                    />
                                </div>
                                <div className="w-[15%]">
                                    <Controller
                                        name="info_bancarias.tipo_conta"
                                        control={control}
                                        render={({ field }) => (
                                            <div className="flex flex-col gap-1 w-full">
                                                <label className="text-xs text-gray-700">Tipo de Conta</label>
                                                <Select<OptionSelect>
                                                    {...field}
                                                    options={tipoContaOptions}
                                                    isClearable
                                                    placeholder="Selecione"
                                                    onChange={(option) => field.onChange(option?.value)}
                                                    value={tipoContaOptions.find(opt => opt.value === field.value) || null}
                                                />
                                                {errors.info_bancarias?.tipo_conta && (
                                                    <span className="text-red-500 text-xs">{errors.info_bancarias?.tipo_conta?.message}</span>
                                                )}
                                            </div>
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="w-[30%]">
                                    <Controller
                                        name="info_beneficio.beneficio"
                                        control={control}
                                        render={({ field }) => {

                                            const selectedOptions: OptionSelect[] = beneficiosOptions.filter(opt =>
                                                field.value?.includes(opt.value)
                                            );

                                            return (
                                                <div className="flex flex-col gap-1 w-full">
                                                    <label className="text-xs text-gray-700">Benefício</label>
                                                    <Select<OptionSelect, true>
                                                        {...field}
                                                        options={beneficiosOptions}
                                                        isClearable
                                                        isMulti
                                                        placeholder="Selecione"
                                                        value={selectedOptions}
                                                        onChange={(options) => {
                                                            if (options && options.length > 3) return
                                                            field.onChange(options ? options.map(opt => opt.value) : []);
                                                        }}
                                                    />
                                                    {errors.info_beneficio?.beneficio && (
                                                        <span className="text-red-500 text-xs">{errors.info_beneficio?.beneficio?.message}</span>
                                                    )}
                                                </div>
                                            )
                                        }}
                                    />
                                </div>
                                <div className="w-[50%]">
                                    <Controller
                                        name="info_beneficio.convenio"
                                        control={control}
                                        render={({ field }) => {

                                            const selectedOptions: OptionSelect[] = conveniosOptions.filter(opt =>
                                                field.value?.includes(opt.value)
                                            );

                                            return (
                                                <div className="flex flex-col gap-1 w-full">
                                                    <label className="text-xs text-gray-700">Convênio</label>
                                                    <Select<OptionSelect, true>
                                                        {...field}
                                                        options={conveniosOptions}
                                                        isClearable
                                                        isMulti
                                                        placeholder="Selecione"
                                                        value={selectedOptions}
                                                        onChange={(options) => {
                                                            if (options && options.length > 3) return
                                                            field.onChange(options ? options.map(opt => opt.value) : []);
                                                        }}
                                                    />
                                                    {errors.info_beneficio?.convenio && (
                                                        <span className="text-red-500 text-xs">{errors.info_beneficio?.convenio?.message}</span>
                                                    )}
                                                </div>
                                            )
                                        }}
                                    />
                                </div>
                                <div className="w-[20%]">
                                    <InputSimples
                                        label="Margem"
                                        name="info_beneficio.margem"
                                        register={register}
                                        error={errors.info_beneficio?.margem}
                                        maxLength={14}
                                        mask={(value) => mask(value, 'currencyBRL')}
                                    />
                                </div>
                            </div>

                        </div>
    )
}
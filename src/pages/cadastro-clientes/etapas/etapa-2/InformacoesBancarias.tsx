import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import type { IClienteForm } from "../../schema/ClienteSchema";
import Select from 'react-select';
import { bancosOptions, beneficiosOptions, conveniosOptions, tipoContaOptions, type OptionSelectNumber, type OptionSelectString } from "../../data/data";
import InputSimples from "../../../../componentes/input-simples/InputSimples";
import { mask } from "../../../../utils/masks";
import { IoAdd, IoRemoveOutline } from "react-icons/io5";
import { toast } from "sonner";

export default function InformacoesBancarias() {

    const { register, formState: { errors }, control, getValues } = useFormContext<IClienteForm>();
    const { fields: fieldsBancarios, append: appendBancarios, remove: removeBancarios } = useFieldArray({
        control,
        name: "info_bancarias"
    });

    const { fields: fieldsBeneficios, append: appendBeneficios, remove: removeBeneficios } = useFieldArray({
        control,
        name: "info_beneficio"
    });

    function adicionarConta() {
        const infoBancarias = getValues('info_bancarias')

        if (infoBancarias.length == 3) {
            return toast.info('Não é possível cadastrar mais de 3 contas bancárias!')
        }

        appendBancarios({
            id: undefined,
            banco: 0,
            agencia: '',
            tipo_conta: '',
            conta: ''
        })
    }

    function adicionarBeneficio() {
        appendBeneficios({
            beneficio: 0,
            convenio: 0,
            margem: ''
        })
    }

    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-gray-500 font-semibold text-sm">INFORMAÇÕES BANCARIAS</h3>

            {fieldsBancarios.map((field, index) => {
                return (
                    <div className="flex gap-3" key={field.id}>
                        <div className="w-1/2">
                            <Controller
                                name={`info_bancarias.${index}.banco`}
                                control={control}
                                render={({ field }) => (
                                    <div className="flex flex-col gap-1 w-full">
                                        <label className="text-xs text-gray-700">Banco</label>
                                        <Select<OptionSelectNumber>
                                            {...field}
                                            options={bancosOptions}
                                            isClearable
                                            placeholder="Selecione"
                                            onChange={(option) => field.onChange(option?.value)}
                                            value={bancosOptions.find(opt => opt.value === field.value) || null}
                                        />
                                        {errors.info_bancarias?.[index] && (
                                            <span className="text-red-500 text-xs">{errors.info_bancarias?.[index]?.message}</span>
                                        )}
                                    </div>
                                )}
                            />
                        </div>
                        <div className="w-[15%]">
                            <InputSimples
                                label="Agencia"
                                name={`info_bancarias.${index}.agencia`}
                                register={register}
                                error={errors.info_bancarias?.[index]?.agencia}
                                maxLength={8}
                                mask={(value) => mask(value, 'apenasNumeros')}
                            />
                        </div>
                        <div className="w-[15%]">
                            <InputSimples
                                label="Nº Conta"
                                name={`info_bancarias.${index}.conta`}
                                register={register}
                                error={errors.info_bancarias?.[index]?.conta}
                                maxLength={12}
                            />
                        </div>
                        <div className="w-[15%]">
                            <Controller
                                name={`info_bancarias.${index}.tipo_conta`}
                                control={control}
                                render={({ field }) => (
                                    <div className="flex flex-col gap-1 w-full">
                                        <label className="text-xs text-gray-700">Tipo de Conta</label>
                                        <Select<OptionSelectString>
                                            {...field}
                                            options={tipoContaOptions}
                                            isClearable
                                            placeholder="Selecione"
                                            onChange={(option) => field.onChange(option?.value)}
                                            value={tipoContaOptions.find(opt => opt.value === field.value) || null}
                                        />
                                        {errors.info_bancarias?.[index]?.tipo_conta && (
                                            <span className="text-red-500 text-xs">{errors.info_bancarias?.[index]?.tipo_conta?.message}</span>
                                        )}
                                    </div>
                                )}
                            />
                        </div>
                        {index == 0 && (
                            <div
                                className='mt-4.5 w-10 h-10 border border-dashed rounded-lg flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-50 transition'
                            >
                                <IoAdd size={24} onClick={() => adicionarConta()} />
                            </div>
                        )}
                        {index == 1 && (
                            <div
                                className='mt-4.5 w-10 h-10 border border-dashed rounded-lg flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-50 transition'
                            >
                                <IoRemoveOutline size={24} onClick={() => removeBancarios(1)} />
                            </div>
                        )}
                    </div>
                )
            })}

            {fieldsBeneficios.map((field, index) => {
                return (
                    <div className="flex gap-3" key={field.id}>
                        <div className="w-[30%]">
                            <Controller
                                name={`info_beneficio.${index}.beneficio`}
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <div className="flex flex-col gap-1 w-full">
                                            <label className="text-xs text-gray-700">Benefício</label>
                                            <Select<OptionSelectNumber>
                                                {...field}
                                                options={beneficiosOptions}
                                                isClearable
                                                placeholder="Selecione"
                                                value={beneficiosOptions.find(opt => opt.value === field.value) || null}
                                                onChange={(option) => field.onChange(option?.value)}
                                            />
                                            {errors.info_beneficio?.[index] && (
                                                <span className="text-red-500 text-xs">{errors.info_beneficio?.[index]?.message}</span>
                                            )}
                                        </div>
                                    )
                                }}
                            />
                        </div>
                        <div className="w-[50%]">
                            <Controller
                                name={`info_beneficio.${index}.convenio`}
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <div className="flex flex-col gap-1 w-full">
                                            <label className="text-xs text-gray-700">Convênio</label>
                                            <Select<OptionSelectNumber>
                                                {...field}
                                                options={conveniosOptions}
                                                isClearable
                                                placeholder="Selecione"
                                                value={conveniosOptions.find(opt => opt.value === field.value) || null}
                                                onChange={(option) => field.onChange(option?.value)}
                                            />
                                            {errors.info_beneficio?.[index]?.convenio && (
                                                <span className="text-red-500 text-xs">{errors.info_beneficio?.[index]?.convenio?.message}</span>
                                            )}
                                        </div>
                                    )
                                }}
                            />
                        </div>
                        <div className="w-[20%]">
                            <InputSimples
                                label="Margem"
                                name={`info_beneficio.${index}.margem`}
                                register={register}
                                error={errors.info_beneficio?.[index]?.margem}
                                maxLength={14}
                                mask={(value) => mask(value, 'currencyBRL')}
                            />
                        </div>
                        {index == 0 && (
                            <div
                                className='mt-4.5 w-10 h-10 border border-dashed rounded-lg flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-50 transition'
                            >
                                <IoAdd size={24} onClick={() => adicionarBeneficio()} />
                            </div>
                        )}
                        {index == 1 && (
                            <div
                                className='mt-4.5 w-10 h-10 border border-dashed rounded-lg flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-50 transition'
                            >
                                <IoRemoveOutline size={24} onClick={() => removeBeneficios(fieldsBeneficios.length - 1)} />
                            </div>
                        )}
                    </div>
                )
            })}

        </div>
    )
}
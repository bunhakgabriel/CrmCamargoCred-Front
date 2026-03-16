import { FaUserPlus } from "react-icons/fa";
import { LuSave } from "react-icons/lu";
import { yupResolver } from '@hookform/resolvers/yup';
import useMask from "../../hooks/useMask";
import { useForm } from "react-hook-form";
import { clienteSchema, type IClienteForm } from "./schema/ClienteSchema";
import InputSimples from "../../componentes/input-simples/InputSimples";

export default function CadastroCliente() {
    const { mask } = useMask()

    const { register, handleSubmit, formState: { errors } } = useForm<IClienteForm>({
        resolver: yupResolver(clienteSchema),
        mode: 'onChange'
    })

    function onSubmit(data: IClienteForm) {
        console.log(data)
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
                            <div className="flex flex-col gap-1 col-span-12">
                                <label className="text-xs text-gray-700">Nome Cliente</label>
                                <input {...register('nome')} className="h-10 border border-gray-300 bg-gray-50 rounded-lg px-2 py-0.5 text-sm" type="text" />
                                {errors.nome && <span className='text-red-500 text-xs'>{errors.nome.message}</span>}
                            </div>

                            <div className="flex flex-col gap-1 col-span-6">
                                <label className="text-xs text-gray-700">CPF</label>
                                <input {...register('cpf')} className="h-10 border border-gray-300 bg-gray-50 rounded-lg px-2 py-0.5 text-sm" type="text" />
                                {errors.cpf && <span className='text-red-500 text-xs'>{errors.cpf.message}</span>}
                            </div>

                            <div className="flex flex-col gap-1 col-span-6">
                                <label className="text-xs text-gray-700">RG</label>
                                <input {...register('rg')} className="h-10 border border-gray-300 bg-gray-50 rounded-lg px-2 py-0.5 text-sm" type="text" />
                                {errors.rg && <span className='text-red-500 text-xs'>{errors.rg.message}</span>}
                            </div>

                            <div className="flex flex-col gap-1 col-span-4">
                                <label className="text-xs text-gray-700">Naturalidade</label>
                                <input {...register('naturalidade')} className="h-10 border border-gray-300 bg-gray-50 rounded-lg px-2 py-0.5 text-sm" type="text" />
                                {errors.naturalidade && <span className='text-red-500 text-xs'>{errors.naturalidade.message}</span>}
                            </div>

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
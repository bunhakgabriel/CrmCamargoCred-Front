import { useMutation } from "@tanstack/react-query";
import InputSimples from "../../../../componentes/input-simples/InputSimples";
import UtilityService from "../../../../services/UtilityService";
import { toast } from "sonner";
import { useFormContext } from "react-hook-form";
import type { IClienteForm } from "../../schema/ClienteSchema";
import { mask } from "../../../../utils/masks";

export default function InformacoesContato() {

    const { register, formState: { errors }, setValue, getValues } = useFormContext<IClienteForm>();

    const mutationCep = useMutation({
        mutationFn: (cep: string) => UtilityService.buscarCep(cep),
        onSuccess: (data) => {
            setValue('endereco.rua', data.logradouro)
            setValue('endereco.bairro', data.bairro)
            setValue('endereco.cidade_estado', `${data.localidade} - ${data.uf}`)
        },
        onError: () => {
            toast.error('Erro ao buscar CEP!')
        }
    })

    function preencherEndereco() {
        let cep = getValues('endereco.cep')
        if (cep && cep.length == 9) {
            cep = cep.replace('-', '')
            mutationCep.mutate(cep)
        }
    }

    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-gray-500 font-semibold text-sm">INFORMAÇÕES DE CONTATO</h3>

            <div className="flex gap-5">
                <div className="flex gap-2">
                    <InputSimples
                        label="CEP"
                        name="endereco.cep"
                        register={register}
                        error={errors.endereco?.cep}
                        maxLength={9}
                        mask={(value) => mask(value, 'cep')}
                    />
                    <button
                        type="button"
                        className="mt-5.5 cursor-pointer bg-blue-500 text-white px-4 rounded hover:bg-blue-600 h-9"
                        onClick={preencherEndereco}
                    >
                        Buscar
                    </button>
                </div>

                <InputSimples
                    label="Rua"
                    name="endereco.rua"
                    register={register}
                    error={errors.endereco?.rua}
                    maxLength={50}
                />
            </div>

            <div className="flex gap-3">
                <InputSimples
                    label="Bairro"
                    name="endereco.bairro"
                    register={register}
                    error={errors.endereco?.bairro}
                    maxLength={50}
                />
                <InputSimples
                    label="Número"
                    name="endereco.numero"
                    register={register}
                    error={errors.endereco?.numero}
                    maxLength={10}
                />
                <InputSimples
                    label="Cidade/Estado"
                    name="endereco.cidade_estado"
                    register={register}
                    error={errors.endereco?.cidade_estado}
                    maxLength={50}
                />
            </div>

            <div>
                <InputSimples
                    label="Complemento"
                    name="endereco.complemento"
                    register={register}
                    error={errors.endereco?.complemento}
                    maxLength={500}
                />
            </div>

        </div>
    )
}
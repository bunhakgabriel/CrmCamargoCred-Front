import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type Resolver } from "react-hook-form";
import Modal from "react-modal";
import { vendedorSchema, type IVendedorForm } from "./schema/VendedorSchema";
import InputSimples from "../../componentes/input-simples/InputSimples";
import { mask } from "../../utils/masks";
import { LuSave } from "react-icons/lu";
import { useMutation } from "@tanstack/react-query";
import VendedorService from "./service/vendedorService";
import type { IVendedor } from "../../interfaces/IVendedor";
import { toast } from "sonner";

type CadastroVendedorProps = {
    isOpen: boolean;
    onClose: () => void;
    resetGrid: () => void;
};

export default function CadastroVendedor({ isOpen, onClose, resetGrid }: CadastroVendedorProps) {

    const form = useForm<IVendedorForm>({
        resolver: yupResolver(vendedorSchema) as Resolver<IVendedorForm>,
        mode: 'onChange'
    })

    const { register, formState: { errors }, handleSubmit, reset } = form;

    const mutation = useMutation({
        mutationFn: (vendedor: IVendedor) => VendedorService.salvarVendedor(vendedor),
        onSuccess: () => {
            toast.success('Vendedor salvo com sucesso!')
            reset();
            onClose();
            resetGrid();
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    function onSubmit(data: IVendedorForm) {
        mutation.mutate(data as IVendedor);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="w-full max-w-[900px] h-auto max-h-[90vh] bg-white rounded-lg shadow-xl p-6 outline-none"
            overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
        >
            <div>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-3">
                        <InputSimples
                            label="Nome Vendedor"
                            name="nome"
                            register={register}
                            error={errors.nome}
                            maxLength={100}
                            mask={(value) => mask(value, 'apenasLetras')}
                        />
                        <InputSimples
                            label="Telefone"
                            name="telefone"
                            register={register}
                            error={errors.telefone}
                            maxLength={15}
                            mask={(value) => mask(value, 'telefone')}
                        />
                    </div>
                    <div>
                        <InputSimples
                            label="Observações"
                            name="observacoes"
                            register={register}
                            type="textArea"
                            error={errors.observacoes}
                        />
                    </div>

                    <div className="flex gap-2 justify-end">
                        <button type="submit" className="cursor-pointer text-sm flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-(--color-primary) hover:opacity-90 transition">
                            <LuSave size={16} /> Salvar
                        </button>
                        <button type="button" onClick={onClose} className="cursor-pointer text-sm flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-(--color-tertiary) hover:opacity-90 transition">
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}
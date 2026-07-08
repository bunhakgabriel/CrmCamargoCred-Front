import { MdOutlineDeleteOutline } from "react-icons/md";
import type { IVendedor } from "../../../interfaces/IVendedor";
import { type ICellRendererParams } from "ag-grid-community";
import { LuPencil } from "react-icons/lu";

export default function AcoesGridVendedores(
    props: ICellRendererParams<IVendedor> &
    {
        setVendedorDelete: (vendedor: IVendedor) => void,
        handleEditVendedor: (id: number) => void,
    }
) {

    const handleDelete = () => {
        if (props.data) {
            props.setVendedorDelete(props.data);
        }
    };

    const handleEdit = () => {
        const idVendedor = props?.data?.id_vendedor

        if (idVendedor) {
            props.handleEditVendedor(idVendedor);
        }
    };

    return (
        <div className="flex items-center gap-2 h-full">
            <button onClick={handleDelete} className="cursor-pointer p-1.5 rounded-md text-destructive hover:bg-destructive/10 transition-colors" title="Excluir">
                <MdOutlineDeleteOutline className="w-4 h-4" />
            </button>
            <button onClick={handleEdit} className="cursor-pointer p-1.5 rounded-md text-primary hover:bg-primary/10 transition-colors" title="Editar">
                <LuPencil className="w-4 h-4" />
            </button>
        </div>
    );
};
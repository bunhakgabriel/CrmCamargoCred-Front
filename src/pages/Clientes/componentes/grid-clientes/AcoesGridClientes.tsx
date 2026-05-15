import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import type { ICliente } from "../../../../interfaces/ICliente";
import { type ICellRendererParams } from "ag-grid-community";

export default function AcoesGridClientes(
    props: ICellRendererParams<ICliente> &
    {
        setClienteDelete: (cliente: ICliente) => void,
        handleEditCliente: (id: number) => void,
        handleViewCliente: (id: number) => void,
    }
) {
    const handleView = () => {
        const idCliente = props?.data?.id_cliente

        if (idCliente) {
            props.handleViewCliente(idCliente);
        }
    }

    const handleEdit = () => {
        const idCliente = props?.data?.id_cliente

        if (idCliente) {
            props.handleEditCliente(idCliente);
        }
    }

    const handleDelete = () => {
        if (props.data) {
            props.setClienteDelete(props.data);
        }
    };

    return (
        <div className="flex items-center gap-2 h-full">
            <button onClick={handleView} className="cursor-pointer p-1.5 rounded-md text-primary hover:bg-accent transition-colors" title="Visualizar">
                <FiEye className="w-4 h-4" />
            </button>
            <button onClick={handleEdit} className="cursor-pointer p-1.5 rounded-md text-primary hover:bg-accent transition-colors" title="Editar">
                <LuPencil className="w-4 h-4" />
            </button>
            <button onClick={handleDelete} className="cursor-pointer p-1.5 rounded-md text-destructive hover:bg-destructive/10 transition-colors" title="Excluir">
                <MdOutlineDeleteOutline className="w-4 h-4" />
            </button>
        </div>
    );
};
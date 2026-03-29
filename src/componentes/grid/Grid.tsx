import { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import {
    AllCommunityModule,
    ModuleRegistry,
    type ColDef,
    type ICellRendererParams,
    themeAlpine,
} from "ag-grid-community";
import { toast } from "sonner";
import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import type { ICliente } from "../../interfaces/ICliente";
import { useQuery } from "@tanstack/react-query";
import ClienteService from "../../pages/cadastro-clientes/services/clienteService";

ModuleRegistry.registerModules([AllCommunityModule]);

const ActionsCellRenderer = (props: ICellRendererParams<ICliente>) => {
    const handleView = () => toast.info(`Visualizar: ${props.data?.nome}`);
    const handleEdit = () => toast.info(`Editar: ${props.data?.nome}`);
    const handleDelete = () => toast.warning(`Excluir: ${props.data?.nome}`);

    return (
        <div className="flex items-center gap-2 h-full">
            <button onClick={handleView} className="p-1.5 rounded-md text-primary hover:bg-accent transition-colors" title="Visualizar">
                <FiEye className="w-4 h-4" />
            </button>
            <button onClick={handleEdit} className="p-1.5 rounded-md text-primary hover:bg-accent transition-colors" title="Editar">
                <LuPencil className="w-4 h-4" />
            </button>
            <button onClick={handleDelete} className="p-1.5 rounded-md text-destructive hover:bg-destructive/10 transition-colors" title="Excluir">
                <MdOutlineDeleteOutline className="w-4 h-4" />
            </button>
        </div>
    );
};

const dateFormatter = (params: { value: Date }) => {
    if (!params.value) return "";
    const d = new Date(params.value);
    return d.toLocaleDateString("pt-BR");
};

const ClienteGrid = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['clientes'],
        queryFn: async () => ClienteService.buscarClientes(),
    })

    const columnDefs = useMemo<ColDef<ICliente>[]>(
        () => [
            { field: "nome", headerName: "Nome", flex: 2, minWidth: 150, filter: true },
            { field: "cpf", headerName: "CPF", flex: 1.5, minWidth: 140 },
            { field: "rg", headerName: "RG", flex: 1.2, minWidth: 120 },
            { field: "naturalidade", headerName: "Naturalidade", flex: 1.5, minWidth: 130, filter: true },
            { field: "telefone", headerName: "Telefone", flex: 1.3, minWidth: 140 },
            { field: "data_nascimento", headerName: "Nascimento", flex: 1.2, minWidth: 120, valueFormatter: dateFormatter },
            {
                headerName: "Ações",
                cellRenderer: ActionsCellRenderer,
                width: 130,
                sortable: false,
                filter: false,
                resizable: false,
                pinned: "right",
            },
        ],
        []
    );

    const defaultColDef = useMemo<ColDef>(
        () => ({
            sortable: true,
            resizable: true,
        }),
        []
    );



    if (isLoading) return <p>Carregando...</p>
    if (error) return <p>Erro ao buscar dados</p>

    return (
        <div className="w-full h-100">
            <AgGridReact<ICliente>
                theme={themeAlpine}
                rowData={data?.data || []}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                animateRows
                pagination
                paginationPageSize={10}
            />
        </div>
    );
};

export default ClienteGrid;

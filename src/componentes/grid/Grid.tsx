import { useState, useMemo, useCallback } from "react";
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

ModuleRegistry.registerModules([AllCommunityModule]);

const mockData: ICliente[] = [
    { nome: "João Silva", cpf: "123.456.789-00", rg: "12.345.678-9", naturalidade: "São Paulo", telefone: "(11) 99999-0001", dataNascimento: new Date(1990, 2, 15) },
    { nome: "Maria Oliveira", cpf: "987.654.321-00", rg: "98.765.432-1", naturalidade: "Rio de Janeiro", telefone: "(21) 98888-0002", dataNascimento: new Date(1985, 7, 22) },
    { nome: "Carlos Santos", cpf: "456.789.123-00", rg: "45.678.912-3", naturalidade: "Belo Horizonte", telefone: "(31) 97777-0003", dataNascimento: new Date(1992, 11, 5) },
    { nome: "Ana Costa", cpf: "321.654.987-00", rg: "32.165.498-7", naturalidade: "Curitiba", telefone: "(41) 96666-0004", dataNascimento: new Date(1988, 4, 30) },
    { nome: "Pedro Lima", cpf: "654.321.987-00", rg: "65.432.198-7", naturalidade: "Salvador", telefone: "(71) 95555-0005", dataNascimento: new Date(1995, 0, 10) },
];

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
    const [rowData] = useState<ICliente[]>(mockData);

    const columnDefs = useMemo<ColDef<ICliente>[]>(
        () => [
            { field: "nome", headerName: "Nome", flex: 2, minWidth: 150, filter: true },
            { field: "cpf", headerName: "CPF", flex: 1.5, minWidth: 140 },
            { field: "rg", headerName: "RG", flex: 1.2, minWidth: 120 },
            { field: "naturalidade", headerName: "Naturalidade", flex: 1.5, minWidth: 130, filter: true },
            { field: "telefone", headerName: "Telefone", flex: 1.3, minWidth: 140 },
            { field: "dataNascimento", headerName: "Nascimento", flex: 1.2, minWidth: 120, valueFormatter: dateFormatter },
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

    return (
        <div className="w-full h-100">
            <AgGridReact<ICliente>
                theme={themeAlpine}
                rowData={rowData}
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

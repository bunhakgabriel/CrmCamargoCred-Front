import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import {
    AllCommunityModule,
    ModuleRegistry,
    type ColDef,
    themeAlpine,
} from "ag-grid-community";
import { toast } from "sonner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ICliente } from "../../../../interfaces/ICliente";
import ClienteService from "../../../cadastro-clientes/services/clienteService";
import ConfirmDelete from "../../../../componentes/confirm-delete/ConfirmDelete";
import AcoesGridClientes from "./AcoesGridClientes";
import EditarCliente from "../EditarCliente";

ModuleRegistry.registerModules([AllCommunityModule]);

const dateFormatter = (params: { value: Date }) => {
    if (!params.value) return "";
    const d = new Date(params.value);
    return d.toLocaleDateString("pt-BR");
};

export default function GridClientes() {
    const [clienteDelete, setClienteDelete] = useState<ICliente | null>(null);
    const [clienteEdit, setClienteEdit] = useState<ICliente | null>(null);

    const queryClient = useQueryClient();

    const mutationDelete = useMutation({
        mutationFn: ClienteService.deletarCliente,
        onSuccess: () => {
            toast.success("Cliente excluído com sucesso!");
            queryClient.invalidateQueries({ queryKey: ['clientes'] });
            setClienteDelete(null);
        },
        onError: () => {
            toast.error("Erro ao excluir cliente!");
            setClienteDelete(null);
        }
    });

    const mutationGetCliente = useMutation({
        mutationFn: ClienteService.buscarClientePorId,
        onSuccess: (data) => {
            setClienteEdit(data.data)
        },
        onError: () => {
            toast.error("Erro ao buscar informações do cliente!")
            setClienteEdit(null);
        }
    })

    const handleDeleteCliente = () => {
        if (clienteDelete) {
            mutationDelete.mutate(clienteDelete.id_cliente);
        }
    }

    const handleEditCliente = (id: number) => {
        mutationGetCliente.mutate(id);
    }

    const columnDefs = useMemo<ColDef<ICliente>[]>(
        () => [
            { field: "nome", headerName: "Nome", flex: 2, minWidth: 150, filter: true },
            { field: "cpf", headerName: "CPF", flex: 1.5, minWidth: 140, filter: true },
            { field: "rg", headerName: "RG", flex: 1.2, minWidth: 120, filter: true },
            { field: "naturalidade", headerName: "Naturalidade", flex: 1.5, minWidth: 130, filter: true },
            { field: "telefone", headerName: "Telefone", flex: 1.3, minWidth: 140, filter: true },
            { field: "data_nascimento", headerName: "Nascimento", flex: 1.2, minWidth: 120, filter: true, valueFormatter: dateFormatter },
            {
                headerName: "Ações",
                cellRenderer: AcoesGridClientes,
                cellRendererParams: {
                    setClienteDelete: setClienteDelete,
                    handleEditCliente: handleEditCliente
                },
                width: 130,
                sortable: false,
                filter: false,
                resizable: false,
                pinned: "right",
            },
        ],
        []
    );

    const datasource = {
        getRows: async (params: any) => {
            const { startRow, endRow, filterModel, sortModel } = params;

            const parametrosBusca = {
                skip: startRow,
                take: endRow - startRow,
                filtros: filterModel,
                ordenacao: sortModel
            }

            try {
                const response = await queryClient.fetchQuery({ 
                    queryKey: ['clientes'], 
                    queryFn: () => ClienteService.buscarClientes(parametrosBusca), 
                });

                const rows = response.data;
                const total = response.meta?.total;
                params.successCallback(rows, total);
            } catch (error) {
                params.failCallback();
            }
        }
    };

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
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowModelType="infinite"
                pagination
                paginationPageSize={10}
                cacheBlockSize={10}
                onGridReady={(params) => {
                    params.api.setGridOption('datasource', datasource);
                }}
            />

            <ConfirmDelete
                open={!!clienteDelete}
                onCancel={() => setClienteDelete(null)}
                onConfirm={handleDeleteCliente}
            />
            <EditarCliente
                cliente={clienteEdit}
                onClose={() => setClienteEdit(null)}
            />
        </div>
    );
};



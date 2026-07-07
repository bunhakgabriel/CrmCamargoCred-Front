import { useMemo, useRef, useState } from "react";
import type { IVendedor } from "../../../interfaces/IVendedor";
import { AgGridReact } from "ag-grid-react";
import {
    AllCommunityModule,
    ModuleRegistry,
    type ColDef,
    themeAlpine,
    type GridApi,
} from "ag-grid-community";
import ConfirmDelete from "../../../componentes/confirm-delete/ConfirmDelete";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import VendedorService from "../../cadastro-vendedores/service/vendedorService";
import AcoesGridVendedores from "./AcoesGridVendedores";
import CadastroVendedor from "../../cadastro-vendedores/CadastroVendedor";
import { toast } from "sonner";

type GridVendedorProps = {
    modalVendedorIsOpen: boolean;
    setModalVendedorIsOpen: (value: boolean) => void;
};

export default function GridVendedores({ modalVendedorIsOpen, setModalVendedorIsOpen }: GridVendedorProps) {
    const [vendedorDelete, setVendedorDelete] = useState<IVendedor | null>(null);
    const [vendedorEdit, setVendedorEdit] = useState<IVendedor | null>(null);

    const gridRef = useRef<GridApi | null>(null);

    const queryClient = useQueryClient();

    const mutationDelete = useMutation({
        mutationFn: VendedorService.deletarVendedor,
        onSuccess: () => {
            toast.success("Vendedor excluído com sucesso!");
            gridRef.current?.refreshInfiniteCache();
            setVendedorDelete(null);
        },
        onError: () => {
            toast.error("Erro ao excluir vendedor!");
            setVendedorDelete(null);
        }
    });

    const columnDefs = useMemo<ColDef<IVendedor>[]>(
        () => [
            { field: "nome", headerName: "Nome", flex: 2, minWidth: 150, filter: true },
            { field: "telefone", headerName: "Telefone", flex: 1.5, minWidth: 140, filter: true },
            { field: "observacoes", headerName: "Observações", flex: 2, minWidth: 160, filter: true },
            {
                headerName: "Ações",
                cellRenderer: AcoesGridVendedores,
                cellRendererParams: {
                    setVendedorDelete: setVendedorDelete,
                    setVendedorEdit: setVendedorEdit,
                },
                width: 100,
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
                    queryKey: [
                        'vendedores',
                        startRow,
                        endRow,
                        JSON.stringify(filterModel),
                        JSON.stringify(sortModel)
                    ],
                    queryFn: () => VendedorService.buscarVendedores(parametrosBusca),
                });

                const rows = response.data;
                const total = response.meta?.total;
                params.successCallback(rows, total);
            } catch (error) {
                params.failCallback();
            }
        }
    };

    const handleDeleteVendedor = () => {
        const idVendedor = vendedorDelete?.id_vendedor

        if (idVendedor) {
            mutationDelete.mutate(idVendedor);
        }
    }

    const defaultColDef = useMemo<ColDef>(
        () => ({
            sortable: true,
            resizable: true,
        }),
        []
    );

    return (
        <div className="w-full h-100">
            <AgGridReact<IVendedor>
                theme={themeAlpine}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowModelType="infinite"
                pagination
                paginationPageSize={10}
                cacheBlockSize={10}
                onGridReady={(params) => {
                    gridRef.current = params.api;
                    params.api.setGridOption('datasource', datasource);
                }}
            />

            <CadastroVendedor
                isOpen={modalVendedorIsOpen}
                onClose={() => setModalVendedorIsOpen(false)}
                resetGrid={() => gridRef.current?.refreshInfiniteCache()}
            />

            <ConfirmDelete
                open={!!vendedorDelete}
                onCancel={() => setVendedorDelete(null)}
                onConfirm={handleDeleteVendedor}
            />
        </div>
    );
}
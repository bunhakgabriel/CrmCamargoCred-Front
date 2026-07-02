import api from "../../../api/api"
import type { IApiResponse } from "../../../interfaces/IApiResponse"
import type { IVendedor } from "../../../interfaces/IVendedor"
import type { FiltrosGrid } from "../../../types/FiltrosGrid"
import type { OrdenacaoGrid } from "../../../types/OrdenacaoGrid"

type BuscarVendedoresParams = {
    skip: number
    take: number
    filtros: FiltrosGrid
    ordenacao: OrdenacaoGrid
}

const VendedorService = {
    salvarVendedor: async (vendedor: IVendedor): Promise<IApiResponse<IVendedor>> => {
        const response = await api.post<IApiResponse<IVendedor>>('/vendedor/salvar', vendedor);
        return response.data;
    },

    buscarVendedores: async ({
        skip,
        take,
        filtros,
        ordenacao
    }: BuscarVendedoresParams): Promise<IApiResponse<IVendedor[], { total: number }>> => {

        // inicio mock
        const vendedoresMock: IVendedor[] = [
            {
                id_vendedor: 1,
                nome: "João Silva",
                telefone: "(11) 99999-1111",
                observacoes: "Especialista em vendas corporativas"
            },
            {
                id_vendedor: 2,
                nome: "Maria Oliveira",
                telefone: "(11) 99999-2222",
                observacoes: "Atende região sul"
            },
            {
                id_vendedor: 3,
                nome: "Carlos Souza",
                telefone: "(11) 99999-3333",
                observacoes: "Vendas externas"
            },
            {
                id_vendedor: 4,
                nome: "Ana Lima",
                telefone: "(11) 99999-4444",
                observacoes: "Responsável pelo pós-venda"
            },
            {
                id_vendedor: 5,
                nome: "Fernanda Costa",
                telefone: "(11) 99999-5555"
            }
        ];

        const data = vendedoresMock.slice(skip, skip + take);

        await new Promise(resolve => setTimeout(resolve, 500));

        return {
            success: true,
            message: "Consulta realizada com sucesso.",
            data,
            meta: {
                total: vendedoresMock.length
            }
        };
        // fim mocka

        // const response =
        //     await api.post<IApiResponse<IVendedor[], { total: number }>>('/vendedor/buscar', {
        //         params: { skip, take, filtros, ordenacao }
        //     });

        // return response.data;
    },

};

export default VendedorService;
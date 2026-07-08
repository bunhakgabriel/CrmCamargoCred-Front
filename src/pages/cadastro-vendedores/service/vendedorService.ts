import api from "../../../api/api"
import type { IApiResponse } from "../../../interfaces/IApiResponse"
import type { IVendedor } from "../../../interfaces/IVendedor"
import type { FiltrosGrid } from "../../../types/FiltrosGrid"
import type { OrdenacaoGrid } from "../../../types/OrdenacaoGrid"

type BuscarVendedoresParams = {
    skip: number
    take: number
    filtros?: FiltrosGrid
    ordenacao?: OrdenacaoGrid
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

        if(!filtros) filtros = { filterType: 'contains', type: 'nome', filter: '' }
        if(!ordenacao) ordenacao = { colId: 'nome', sort: 'asc', type: 'default' }

        const response =
            await api.post<IApiResponse<IVendedor[], { total: number }>>('/vendedor/buscar', {
                params: { skip, take, filtros, ordenacao }
            });

        return response.data;
    },

    buscarVendedorPorId: async (id: number): Promise<IApiResponse<IVendedor>> => {
        const response = await api.get<IApiResponse<IVendedor>>('/vendedor/buscar/' + id);
        return response.data;
    },

    deletarVendedor: async (id: number): Promise<IApiResponse<null>> => {
        const response = await api.delete<IApiResponse<null>>('/vendedor/deletar/' + id);
        return response.data;
    },

};

export default VendedorService;

import api from "../../../api/api.ts";
import type { IApiResponse } from "../../../interfaces/IApiResponse.ts";
import type { ICliente } from "../../../interfaces/ICliente";
import type { FiltrosGrid } from "../../../types/FiltrosGrid.ts";
import type { OrdenacaoGrid } from "../../../types/OrdenacaoGrid.ts";


type BuscarClientesParams = {
    skip: number
    take: number
    filtros: FiltrosGrid
    ordenacao: OrdenacaoGrid
}

const ClienteService = {
    salvarCliente: async (cliente: ICliente): Promise<IApiResponse<ICliente>> => {
        const response = await api.post<IApiResponse<ICliente>>('/cliente/salvar', cliente);
        return response.data;
    },

    buscarClientes: async ({
        skip,
        take,
        filtros,
        ordenacao
    }: BuscarClientesParams): Promise<IApiResponse<ICliente[], { total: number }>> => {

        const response =
            await api.post<IApiResponse<ICliente[], { total: number }>>('/cliente/buscar', {
                params: { skip, take, filtros, ordenacao }
            });

        return response.data;
    },

    buscarClientePorId: async (id: number): Promise<IApiResponse<ICliente>> => {
        const response = await api.get<IApiResponse<ICliente>>('/cliente/buscar/' + id);
        return response.data;
    },

    deletarCliente: async (id: number): Promise<IApiResponse<null>> => {
        const response = await api.delete<IApiResponse<null>>('/cliente/deletar/' + id);
        return response.data;
    }
};

export default ClienteService;
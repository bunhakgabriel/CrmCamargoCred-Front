
import api from "../../../api/api.ts";
import type { IApiResponse } from "../../../interfaces/IApiResponse.ts";
import type { ICliente } from "../../../interfaces/ICliente";


const ClienteService = {
    salvarCliente: async (cliente: ICliente): Promise<IApiResponse<ICliente>> => {
        const response = await api.post<IApiResponse<ICliente>>('/cliente/salvar', cliente);
        return response.data;
    },

    buscarClientes: async (skip: number, take: number): Promise<IApiResponse<ICliente[], { total: number }>> => {
        const response = await api.get<IApiResponse<ICliente[], { total: number }>>(`/cliente/buscar?skip=${skip}&take=${take}`);
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
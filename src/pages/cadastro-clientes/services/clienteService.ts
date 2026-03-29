
import api from "../../../api/api.ts";
import type { IApiResponse } from "../../../interfaces/IApiResponse.ts";
import type { ICliente } from "../../../interfaces/ICliente";


const ClienteService = {
    criarCliente: async (cliente: ICliente): Promise<IApiResponse<ICliente>> => {
        const response = await api.post<IApiResponse<ICliente>>('/cliente/cadastrar', cliente);
        return response.data;
    },

    buscarClientes: async (): Promise<IApiResponse<ICliente[]>> => {
        const response = await api.get<IApiResponse<ICliente[]>>('/cliente/buscar');
        return response.data;
    }
};

export default ClienteService;
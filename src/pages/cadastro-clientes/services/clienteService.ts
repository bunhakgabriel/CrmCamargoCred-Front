
import api from "../../../api/api.ts";
import type { IApiResponse } from "../../../interfaces/IApiResponse.ts";
import type { ICliente } from "../../../interfaces/ICliente";

export async function criarCliente(cliente: ICliente): Promise<IApiResponse<ICliente>> {
    const response = await api.post<IApiResponse<ICliente>>('/cliente/cadastrar', cliente);
    return response.data;
}
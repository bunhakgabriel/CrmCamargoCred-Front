import ApiRequest from "../../../api/ApiRequeste.ts";
import type { ICliente } from "../../../interfaces/ICliente";

export async function criarCliente(cliente: ICliente){
    const api = new ApiRequest();
    const data = await api.post<ICliente>('http://localhost:8000/cliente/cadastrar', cliente);
    return data;
}
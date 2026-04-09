import api from "../api/api"
import type { IEndereco } from "../interfaces/IEndereco";

export const buscarCep = async (cep: string): Promise<IEndereco> => {
    const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
}
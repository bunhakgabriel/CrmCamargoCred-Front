import api from "../api/api"
import type { IApiResponse } from "../interfaces/IApiResponse";
import type { IEndereco } from "../interfaces/IEndereco";
import type { OptionSelectString } from "../types/OptionSelectString";

const UtilityService = {

    buscarCep: async (cep: string): Promise<IEndereco> => {
        const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data;
    },

    buscarUfs: async (): Promise<IApiResponse<OptionSelectString>> => {
        const response = await api.get<IApiResponse<OptionSelectString>>('/reference-data/ufs');
        return response.data;
    }
}

export default UtilityService;
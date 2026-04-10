import api from "../api/api"
import type { IApiResponse } from "../interfaces/IApiResponse";
import type { IEndereco } from "../interfaces/IEndereco";
import type { OptionSelect } from "../types/OptionSelect";

const UtilityService = {

    buscarCep: async (cep: string): Promise<IEndereco> => {
        const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data;
    },

    buscarUfs: async (): Promise<IApiResponse<OptionSelect>> => {
        const response = await api.get<IApiResponse<OptionSelect>>('/reference-data/ufs');
        return response.data;
    }
}

export default UtilityService;
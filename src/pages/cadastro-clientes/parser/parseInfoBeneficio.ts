import type { InfoBeneficio } from "../../../interfaces/ICliente";
import { formatMoneyToNumber } from "../../../utils/format-money";

type InfoBeneficioParam = {
    beneficio?: number 
    convenio?: number 
    margem?: string 
}

export function parseInfoBeneficioRequest(obj: InfoBeneficioParam[]): InfoBeneficio[] {
    const resp = obj
        .filter(
            (value): value is InfoBeneficioParam =>
                !!value.margem && !!value.convenio && !!value.beneficio
        )
        .map(value => ({
            beneficio: Number(value.beneficio),
            convenio: Number(value.convenio),
            margem: formatMoneyToNumber(value.margem || '')
        }));

    return resp
}
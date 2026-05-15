import type { InfoBeneficio } from "../../../interfaces/ICliente";
import { formatMoneyToNumber } from "../../../utils/format-money";
import { mask } from "../../../utils/masks";

type InfoBeneficioParam = {
    id?: number
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
            id: value.id,
            beneficio: Number(value.beneficio),
            convenio: Number(value.convenio),
            margem: formatMoneyToNumber(value.margem || '')
        }));

    return resp
}

export function parseInfoBeneficioResponse(obj: InfoBeneficio[]): InfoBeneficioParam[] {
    if (obj.length == 0) {
        return [{
            id: undefined,
            beneficio: 0,
            convenio: 0,
            margem: ''
        }]
    }

    const resp = obj.map(value => ({
        id: value.id,
        beneficio: value.beneficio,
        convenio: value.convenio,
        margem: mask(value.margem || '', 'currencyBRL')
    }))

    return resp;
}
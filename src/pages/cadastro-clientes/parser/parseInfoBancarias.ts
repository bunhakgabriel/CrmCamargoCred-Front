import type { InfoBancarias } from "../../../interfaces/ICliente"

export function parseInfoBancariaRequest(obj: InfoBancarias[]): InfoBancarias[] {
    const resp = obj.filter(value => {
        return !!value.agencia && !!value.banco && !!value.conta && !!value.tipo_conta
    })
    return resp
}

export function parseInfoBancariaResponse(obj: InfoBancarias[]): InfoBancarias[] {
    if (obj.length == 0) {
        obj = [{
            id: undefined,
            banco: 0,
            agencia: '',
            tipo_conta: '',
            conta: ''
        }]
    }

    return obj
}
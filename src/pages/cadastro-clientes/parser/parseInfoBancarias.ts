import type { InfoBancarias } from "../../../interfaces/ICliente"

export function parseInfoBancariaRequest(obj: InfoBancarias[]): InfoBancarias[] {
    const resp = obj.filter(value => {
        return !!value.agencia && !!value.banco && !!value.conta && !!value.tipo_conta
    })
    return resp
}
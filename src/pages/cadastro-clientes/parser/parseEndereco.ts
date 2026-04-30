import type { Endereco } from "../../../interfaces/ICliente"

export function parseEnderecoRequest(obj: Endereco): Endereco | undefined {
    const valido = Object.values(obj).some(value => !!value);
    if(!valido) return undefined

    const resp = {
        cep: obj.cep || undefined,
        rua: obj.rua || undefined,
        bairro: obj.bairro || undefined,
        cidade_estado: obj.cidade_estado || undefined,
        complemento: obj.complemento || undefined,
        numero: obj.numero || undefined
    }

    return resp
}
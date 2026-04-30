import type { Conjugue } from "../../../interfaces/ICliente";
import { parseDateRequest } from "./parseDate";

type ConjugueParam = {
    nome?: string
    data_nascimento?: string
    documento?: string
    naturalidade?: string
}

export function parseConjugueRequest(obj: ConjugueParam): Conjugue | undefined {
    
    const valido = Object.values(obj).some(value => !!value);
    if (!valido) return undefined

    const dataNascimento = obj.data_nascimento ? parseDateRequest(obj.data_nascimento) : undefined

    const resp = {
        data_nascimento: dataNascimento,
        documento: obj.documento || undefined,
        naturalidade: obj.naturalidade || undefined,
        nome: obj.nome || undefined
    }

    return resp
}
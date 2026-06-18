import type { Conjugue } from "../../../interfaces/ICliente";
import { parseDateRequest, parseDateResponse } from "./parseDate";

type ConjugueParam = {
    nome?: string | null
    data_nascimento?: string | null
    documento?: string | null
    naturalidade?: string | null
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

export function parseConjugueResponse(obj: Conjugue | undefined): ConjugueParam {
    let resp = {} as ConjugueParam;

    if(!obj){
        resp.data_nascimento = ''
        resp.documento = ''
        resp.naturalidade = ''
        resp.nome = ''
        return resp;
    }

    const data_nascimento = obj.data_nascimento ? parseDateResponse(obj.data_nascimento) : ''
    resp = { ...obj, data_nascimento: data_nascimento };
    return resp;
}
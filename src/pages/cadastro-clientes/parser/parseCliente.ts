import type { ICliente } from "../../../interfaces/ICliente"
import { mask } from "../../../utils/masks"
import { onlyNumbersToString } from "../../../utils/only-numbers"
import type { IClienteForm } from "../schema/ClienteSchema"
import { parseConjugueRequest } from "./parseConjugue"
import { parseDateRequest } from "./parseDate"
import { parseEnderecoRequest } from "./parseEndereco"
import { parseInfoBancariaRequest } from "./parseInfoBancarias"
import { parseInfoBeneficioRequest } from "./parseInfoBeneficio"

export function parseClienteRequest(data: IClienteForm): ICliente {
    return {
        id_cliente: data.id_cliente,
        cpf: data.cpf,
        nome: data.nome.trim(),
        sexo: data.sexo || undefined,
        data_nascimento: data.data_nascimento ? parseDateRequest(data.data_nascimento) : undefined,
        naturalidade: data.naturalidade || undefined,
        nacionalidade: data.nacionalidade || undefined,
        rg: data.rg,
        data_emissao_rg: data.data_emissao_rg ? parseDateRequest(data.data_emissao_rg) : undefined,
        orgao_emissor_rg: data.orgao_emissor_rg || undefined,
        uf_rg: data.uf_rg || undefined,
        telefone_1: onlyNumbersToString(data.telefone_1) || undefined,
        telefone_2: onlyNumbersToString(data.telefone_2) || undefined,
        telefone_3: onlyNumbersToString(data.telefone_3) || undefined,
        observacoes: data.observacoes || undefined,
        email: data.email || undefined,
        info_bancarias: parseInfoBancariaRequest(data.info_bancarias),
        info_beneficio: parseInfoBeneficioRequest(data.info_beneficio),
        endereco: parseEnderecoRequest(data.endereco),
        nome_pai: data.nome_pai || undefined,
        nome_mae: data.nome_mae || undefined,
        grau_instrucao: data.grau_instrucao,
        estado_civil: data.estado_civil,
        endereco_correspondencia: data.endereco_correspondencia,
        num_dependentes: data.num_dependentes,
        conjugue: parseConjugueRequest(data.conjugue)
    }
}

export function parseClienteResponse(cliente: ICliente): IClienteForm {
    return {
        ...cliente,
        telefone_1: mask(cliente.telefone_1, 'telefone'),
        cpf: mask(cliente.cpf, 'cpf'),
        data_nascimento: parseDateResponse(cliente.data_nascimento),
        data_emissao_rg: parseDateResponse(cliente.data_emissao_rg),
        conjugue: {
            ...cliente.conjugue,
            data_nascimento: parseDateResponse(cliente.conjugue.data_nascimento)
        }
    }
}






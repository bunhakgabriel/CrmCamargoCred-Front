import type { ICliente } from "../../../interfaces/ICliente"
import type { ArquivoUpload } from "../../../types/ArquivoUpload"
import { mask } from "../../../utils/masks"
import { onlyNumbersToString } from "../../../utils/only-numbers"
import type { IClienteForm } from "../schema/ClienteSchema"
import { parseConjugueRequest, parseConjugueResponse } from "./parseConjugue"
import { parseDateRequest, parseDateResponse } from "./parseDate"
import { parseEnderecoRequest, parseEnderecoResponse } from "./parseEndereco"
import { parseInfoBancariaRequest, parseInfoBancariaResponse } from "./parseInfoBancarias"
import { parseInfoBeneficioRequest, parseInfoBeneficioResponse } from "./parseInfoBeneficio"

export function parseClienteRequest(data: IClienteForm): ICliente {
    return {
        id_cliente: data.id_cliente,
        cpf: data.cpf,
        nome: data.nome.trim(),
        sexo: data.sexo || undefined,
        vendedor: data.vendedor || undefined,
        data_nascimento: data.data_nascimento ? parseDateRequest(data.data_nascimento) : undefined,
        naturalidade: data.naturalidade || undefined,
        nacionalidade: data.nacionalidade || undefined,
        rg: data.rg || undefined,
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
        grau_instrucao: data.grau_instrucao || undefined,
        estado_civil: data.estado_civil || undefined,
        endereco_correspondencia: data.endereco_correspondencia || undefined,
        num_dependentes: data.num_dependentes || undefined,
        conjugue: parseConjugueRequest(data.conjugue)
    }
}

export function parseClienteResponse(cliente: ICliente & { documentos?: ArquivoUpload[] }): IClienteForm {
    return {
        id_cliente: cliente.id_cliente,
        cpf: cliente.cpf,
        nome: cliente.nome,
        sexo: cliente.sexo || undefined,
        vendedor: cliente.vendedor,
        data_nascimento: cliente.data_nascimento ? parseDateResponse(cliente.data_nascimento) : '',
        naturalidade: cliente.naturalidade || undefined,
        nacionalidade: cliente.nacionalidade || undefined,
        rg: cliente.rg,
        data_emissao_rg: cliente.data_emissao_rg ? parseDateResponse(cliente.data_emissao_rg) : '',
        orgao_emissor_rg: cliente.orgao_emissor_rg || undefined,
        uf_rg: cliente.uf_rg || undefined,
        telefone_1: cliente.telefone_1 ? mask(cliente.telefone_1, 'telefone') : '',
        telefone_2: cliente.telefone_2 ? mask(cliente.telefone_2, 'telefone') : '',
        telefone_3: cliente.telefone_3 ? mask(cliente.telefone_3, 'telefone') : '',
        observacoes: cliente.observacoes || undefined,
        email: cliente.email || undefined,
        info_bancarias: parseInfoBancariaResponse(cliente.info_bancarias),
        info_beneficio: parseInfoBeneficioResponse(cliente.info_beneficio),
        endereco: parseEnderecoResponse(cliente.endereco),
        nome_pai: cliente.nome_pai || undefined,
        nome_mae: cliente.nome_mae || undefined,
        grau_instrucao: cliente.grau_instrucao,
        estado_civil: cliente.estado_civil,
        endereco_correspondencia: cliente.endereco_correspondencia,
        num_dependentes: cliente.num_dependentes,
        conjugue: parseConjugueResponse(cliente.conjugue),
        documentos: cliente.documentos
    }
}






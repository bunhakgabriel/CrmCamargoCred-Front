import type { Conjugue, Endereco, ICliente, InfoBancarias, InfoBeneficio } from "../../../interfaces/ICliente"
import { formatMoneyToNumber } from "../../../utils/format-money"
import { mask } from "../../../utils/masks"
import { onlyNumbersToString } from "../../../utils/only-numbers"
import type { IClienteForm } from "../schema/ClienteSchema"


export function parseClienteRequest(data: IClienteForm): ICliente {
    debugger
    const resp = {
        id_cliente: data.id_cliente || 0,
        cpf: onlyNumbersToString(data.cpf),
        nome: data.nome,
        sexo: data.sexo || undefined,
        data_nascimento: parseDateRequest(data.data_nascimento),
        naturalidade: data.naturalidade || undefined,
        nacionalidade: data.nacionalidade || undefined,
        rg: onlyNumbersToString(data.rg),
        data_emissao_rg: parseDateRequest(data.data_emissao_rg),
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
        nome_pai: data.nome_pai,
        nome_mae: data.nome_mae,
        grau_instrucao: data.grau_instrucao,
        estado_civil: data.estado_civil,
        endereco_correspondencia: data.endereco_correspondencia,
        num_dependentes: data.num_dependentes,
        conjugue: parseConjugueRequest(data.conjugue)
    }

    debugger
    return resp
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

function parseDateResponse(date: Date | string) {
    const d = new Date(date)

    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()

    return `${day}/${month}/${year}`
}

function parseDateRequest(date: string | undefined): Date | undefined {
    if (!date) return undefined
    const [day, month, year] = date.split('/').map(Number)
    return new Date(year, month - 1, day)
}

function parseInfoBancariaRequest(obj: InfoBancarias[]): InfoBancarias[] | undefined {
    const resp = obj.filter(value => !!value.agencia && !!value.banco && !!value.conta && !!value.tipo_conta)
    if(resp.length == 0) return undefined
    return resp
}

function parseEnderecoRequest(obj: Endereco): Endereco | undefined {
    const value = [obj]
    const resp = value.filter(value => 
        !!value.bairro && !!value.cep && !!value.cidade_estado && !!value.complemento &&
        !!value.numero && !!value.rua
    )

    if(resp.length == 0) return undefined
    return resp[0]
}

function parseConjugueRequest(obj: { data_nascimento?: any, documento?: string, naturalidade?: string, nome?: string }): Conjugue | undefined {
    const value = [obj]
    const resp = value.filter(value => 
        !!value.data_nascimento && !!value.documento && !!value.naturalidade && !!value.nome 
    )

    if(resp.length == 0) return undefined
    resp[0].data_nascimento = parseDateRequest(resp[0].data_nascimento)
}

function parseInfoBeneficioRequest(obj: { beneficio?: number, convenio?: number, margem?: string }[]): InfoBeneficio[] | undefined {
    const resp = obj
        .filter(
            (value): value is { beneficio: number; convenio: number; margem: string } =>
                !!value.margem && !!value.convenio && !!value.beneficio
        )
        .map(value => ({
            beneficio: Number(value.beneficio),
            convenio: Number(value.convenio),
            margem: formatMoneyToNumber(value.margem)
        }));

    if(resp.length == 0) return undefined
    return resp
}


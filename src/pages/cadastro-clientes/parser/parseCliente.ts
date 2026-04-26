import type { ICliente, InfoBancarias, InfoBeneficio } from "../../../interfaces/ICliente"
import { formatMoneyToNumber } from "../../../utils/format-money"
import { mask } from "../../../utils/masks"
import { onlyNumbersToString } from "../../../utils/only-numbers"
import type { IClienteForm } from "../schema/ClienteSchema"


export function parseClienteRequest(data: IClienteForm): ICliente {
    return {
        id_cliente: data.id_cliente,
        cpf: onlyNumbersToString(data.cpf),
        nome: data.nome,
        sexo: data.sexo,
        data_nascimento: parseDateRequest(data.data_nascimento),
        naturalidade: data.naturalidade,
        nacionalidade: data.nacionalidade,
        rg: onlyNumbersToString(data.rg),
        data_emissao_rg: parseDateRequest(data.data_emissao_rg),
        orgao_emissor_rg: data.orgao_emissor_rg,
        uf_rg: data.uf_rg,
        telefone_1: onlyNumbersToString(data.telefone_1),
        telefone_2: onlyNumbersToString(data.telefone_2),
        telefone_3: onlyNumbersToString(data.telefone_3),
        observacoes: data.observacoes,
        email: data.email,
        info_bancarias: parseInfoBancariaRequest(data.info_bancarias),
        info_beneficio: parseInfoBeneficioRequest(data.info_beneficio),
        endereco: {
            cep: data.endereco.cep,
            rua: data.endereco.rua,
            cidade_estado: data.endereco.cidade_estado,
            bairro: data.endereco.bairro,
            numero: data.endereco.numero,
            complemento: data.endereco.complemento,
        },
        nome_pai: data.nome_pai,
        nome_mae: data.nome_mae,
        grau_instrucao: data.grau_instrucao,
        estado_civil: data.estado_civil,
        endereco_correspondencia: data.endereco_correspondencia,
        num_dependentes: data.num_dependentes,
        conjugue: {
            nome: data.conjugue.nome,
            data_nascimento: parseDateRequest(data.conjugue.data_nascimento),
            documento: data.conjugue.documento,
            naturalidade: data.conjugue.naturalidade
        }
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

function parseDateResponse(date: Date | string) {
    const d = new Date(date)

    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()

    return `${day}/${month}/${year}`
}

function parseDateRequest(date: string): Date {
    const [day, month, year] = date.split('/').map(Number)
    return new Date(year, month - 1, day)
}

function parseInfoBancariaRequest(obj: InfoBancarias[]): InfoBancarias[] {
    const resp = obj.filter(value => Object.values(value).some(v => v?.toString().trim() !== ''))
    return resp;
}

function parseInfoBeneficioRequest(obj: { beneficio: string, convenio: string, margem: string }[]): InfoBeneficio[] {
    const resp = obj
        .filter(value => Object.values(value).some(v => v?.toString().trim() !== ''))
        .map(value => ({
            beneficio: Number(value.beneficio),
            convenio: Number(value.convenio),
            margem: formatMoneyToNumber(value.margem)
        }));

    return resp
}
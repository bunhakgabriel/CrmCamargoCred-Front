import type { ICliente } from "../../../interfaces/ICliente"
import { mask } from "../../../utils/masks"
import type { IClienteForm } from "../schema/ClienteSchema"


export function parseClienteRequest(data: IClienteForm): ICliente {
    return {
        id_cliente: data.id_cliente,
        nome: data.nome.trim(),
        cpf: data.cpf.replace(/\D/g, ''),
        rg: data.rg.replace(/\D/g, ''),
        naturalidade: data.naturalidade.trim(),
        telefone: data.telefone.replace(/\D/g, ''),
        data_nascimento: parseDateRequest(data.data_nascimento)
    }
}

export function parseClienteResponse(cliente: ICliente): IClienteForm {
    return {
        ...cliente,
        telefone: mask(cliente.telefone, 'telefone'),
        cpf: mask(cliente.cpf, 'cpf'),
        data_nascimento: parseDateResponse(cliente.data_nascimento)
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
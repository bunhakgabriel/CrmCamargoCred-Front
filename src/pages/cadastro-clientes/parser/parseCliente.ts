import type { ICliente } from "../../../interfaces/ICliente"
import type { IClienteForm } from "../schema/ClienteSchema"


export function parseClienteRequest(data: IClienteForm): ICliente {
    return {
        nome: data.nome.trim(),
        cpf: data.cpf.replace(/\D/g, ''),
        rg: data.rg.replace(/\D/g, ''),
        naturalidade: data.naturalidade.trim(),
        telefone: data.telefone.replace(/\D/g, ''),
        dataNascimento: parseDateRequest(data.dataNascimento)
    }
}

export function parseClienteResponse(cliente: ICliente) {
    return {
        ...cliente,
        dataNascimento: parseDateResponse(cliente.dataNascimento)
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
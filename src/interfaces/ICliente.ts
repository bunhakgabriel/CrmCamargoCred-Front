export type InfoBancarias = {
    banco: string
    agencia: string
    tipo_conta: string
    conta: string
}

export type InfoBeneficio = {
    beneficio: string
    convenio: number
    margem: number
}

type Endereco = {
    cep: string
    rua: string
    cidade_estado: string
    bairro: string
    numero: string
    complemento: string
}

type Conjugue = {
    nome: string
    data_nascimento: Date
    documento: string
    naturalidade: string
}

export interface ICliente {
    id_cliente: number
    cpf: string
    nome: string
    sexo: string
    data_nascimento: Date
    naturalidade: string
    nacionalidade: number | undefined
    rg: string
    data_emissao_rg: Date
    orgao_emissor_rg: string
    uf_rg: string
    telefone_1: string
    telefone_2: string
    telefone_3: string
    observacoes: string
    email: string
    info_bancarias: InfoBancarias[]
    info_beneficio: InfoBeneficio[]
    endereco: Endereco
    nome_pai: string,
    nome_mae: string,
    grau_instrucao: number | undefined,
    estado_civil: number | undefined,
    endereco_correspondencia: string,
    num_dependentes: number | undefined,
    conjugue: Conjugue
}

export type InfoBancarias = {
    banco?: number 
    agencia?: string 
    tipo_conta?: string 
    conta?: string 
}

export type InfoBeneficio = {
    beneficio?: number 
    convenio?: number 
    margem?: number 
}

export type Endereco = {
    cep?: string 
    rua?: string 
    cidade_estado?: string 
    bairro?: string 
    numero?: string 
    complemento?: string 
}

export type Conjugue = {
    nome?: string 
    data_nascimento?: Date 
    documento?: string 
    naturalidade?: string 
}

export interface ICliente {
    id_cliente: number
    cpf: string 
    nome: string
    sexo: string | undefined
    data_nascimento: Date | undefined
    naturalidade: string | undefined
    nacionalidade: number | undefined
    rg: string 
    data_emissao_rg: Date | undefined
    orgao_emissor_rg: string | undefined
    uf_rg: string | undefined
    telefone_1: string | undefined
    telefone_2: string | undefined
    telefone_3: string | undefined
    observacoes: string | undefined
    email: string | undefined
    info_bancarias: InfoBancarias[] | undefined
    info_beneficio: InfoBeneficio[] | undefined
    endereco: Endereco | undefined
    nome_pai: string | undefined
    nome_mae: string | undefined
    grau_instrucao: number | undefined
    estado_civil: number | undefined
    endereco_correspondencia: string | undefined
    num_dependentes: number | undefined
    conjugue: Conjugue | undefined
}

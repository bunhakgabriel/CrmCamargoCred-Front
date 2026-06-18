export type InfoBancarias = {
    id?: number
    banco?: number 
    agencia?: string 
    tipo_conta?: string 
    conta?: string 
}

export type InfoBeneficio = {
    id?: number
    beneficio?: number 
    convenio?: number 
    margem?: number 
}

export type Endereco = {
    cep?: string | null
    rua?: string | null
    cidade_estado?: string | null 
    bairro?: string | null
    numero?: string | null
    complemento?: string | null
}

export type Conjugue = {
    nome?: string 
    data_nascimento?: Date 
    documento?: string 
    naturalidade?: string 
}

export interface ICliente {
    id_cliente?: number 
    cpf: string 
    nome: string
    sexo?: string 
    data_nascimento?: Date 
    naturalidade?: string 
    nacionalidade?: number 
    rg: string 
    data_emissao_rg?: Date 
    orgao_emissor_rg?: string 
    uf_rg?: string 
    telefone_1?: string 
    telefone_2?: string 
    telefone_3?: string 
    observacoes?: string 
    email?: string 
    info_bancarias: InfoBancarias[] 
    info_beneficio: InfoBeneficio[] 
    endereco?: Endereco 
    nome_pai?: string 
    nome_mae?: string 
    grau_instrucao?: number 
    estado_civil?: number 
    endereco_correspondencia?: string 
    num_dependentes?: number 
    conjugue?: Conjugue 
}

export interface OptionSelectString {
  value: string;
  label: string;
}

export interface OptionSelectNumber {
  value: number;
  label: string;
}

export const ufOptions: OptionSelectString[] = [
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraima" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" },
];

export const sexoOptions: OptionSelectString[] = [
  { value: "M", label: "Masculino" },
  { value: "F", label: "Feminino" },
]

export const grauInstrucaoOptions: OptionSelectNumber[] = [
  { value: 1, label: "Analfabeto" },
  { value: 2, label: "Lê e Escreve" },
  { value: 3, label: "Primeiro Grau Incompleto" },
  { value: 4, label: "Primeiro Grau Completo" },
  { value: 5, label: "Segundo Grau Incompleto" },
  { value: 6, label: "Segundo Grau Completo" },
  { value: 7, label: "Superior Incompleto" },
  { value: 8, label: "Superior Completo" }
]

export const estadoCivilOptions: OptionSelectNumber[] = [
  { value: 1, label: "Solteiro(a)" },
  { value: 2, label: "Casado(a)" },
  { value: 3, label: "Divorciado(a)" },
  { value: 4, label: "Viúvo(a)" },
]

export const enderecoCorrespondenciaOptions: OptionSelectString[] = [
  { value: "Residencial", label: "Residencial" },
  { value: "Comercial", label: "Comercial" },
]

export const bancosOptions: OptionSelectNumber[] = [
  { value: 1, label: "237 Bradesco" },
  { value: 2, label: "104 Caixa Econômica" },
  { value: 3, label: "001 Banco do Brasil" },
  { value: 4, label: "318 BMG" },
  { value: 5, label: "389 Mercantil" },
  { value: 6, label: "341 Itaú" },
  { value: 7, label: "033 Santander" },
  { value: 8, label: "121 Agibank" },
  { value: 9, label: "756 Sicoob" },
  { value: 10, label: "748 Sicred" },
  { value: 11, label: "260 Nubank" },
  { value: 12, label: "077 Inter" },
  { value: 13, label: "380 Pic Pay" },
  { value: 14, label: "623 Banco Pan" },
]

export const tipoContaOptions: OptionSelectString[] = [
  { value: "CC", label: "CC" },
  { value: "CP", label: "CP" },
  { value: "CM", label: "CM" },
]

export const nacionalidadeOptions: OptionSelectNumber[] = [
  { value: 1, label: "Brasil" }
]

export const beneficiosOptions: OptionSelectNumber[] = [
  { value: 41, label: "41" },
  { value: 42, label: "42" }
]

export const conveniosOptions: OptionSelectNumber[] = [
  { value: 1, label: "INSS" },
  { value: 2, label: "Federal Civil" },
  { value: 3, label: "Aeronáutica" },
  { value: 4, label: "Exército" },
  { value: 5, label: "Marinha" },
  { value: 6, label: "Estadual" },
  { value: 7, label: "Municipal" },
  { value: 8, label: "Empresa Privada" },
  { value: 9, label: "Seguro" },
  { value: 10, label: "Assoc. Servidores" },
  { value: 11, label: "Tribunal de Justiça" },
  { value: 12, label: "FGTS" },
  { value: 13, label: "Auxílio Brasil" },
  { value: 14, label: "Cartão Benefício" },
  { value: 15, label: "Veículos" },
  { value: 16, label: "Cartão Consignado" },
  { value: 17, label: "Saque Complementar" },
  { value: 18, label: "Empréstimo CLT" },
];
export interface OptionSelect {
  value: string;
  label: string;
}

export const ufOptions: OptionSelect[] = [
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

export const sexoOptions: OptionSelect[] = [
  { value: "M", label: "Masculino" },
  { value: "F", label: "Feminino" },
]

export const grauInstrucaoOptons: OptionSelect[] = [
  { value: "Analfabeto", label: "Analfabeto" },
  { value: "Lê e Escreve", label: "Lê e Escreve" },
  { value: "Primeiro Grau Incompleto", label: "Primeiro Grau Incompleto" },
  { value: "Primeiro Grau Completo", label: "Primeiro Grau Completo" },
  { value: "Segundo Grau Incompleto", label: "Segundo Grau Incompleto" },
  { value: "Segundo Grau Completo", label: "Segundo Grau Completo" },
  { value: "Superior Incompleto", label: "Superior Incompleto" },
  { value: "Superior Completo", label: "Superior Completo" }
]

export const estadoCivilOptions: OptionSelect[] = [
  { value: "Solteiro(a)", label: "Solteiro(a)" },
  { value: "Casado(a)", label: "Casado(a)" },
  { value: "Divorciado(a)", label: "Divorciado(a)" },
  { value: "Viúvo(a)", label: "Viúvo(a)" },
]

export const enderecoCorrespondenciaOptions: OptionSelect[] = [
  { value: "Residencial", label: "Residencial" },
  { value: "Comercial", label: "Comercial" },
]
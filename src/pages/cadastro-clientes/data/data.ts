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

export const bancosOptions: OptionSelectString[] = [
  { value: "321", label: "321 Sociedade de Crédito Direto S.A." },
  { value: "318", label: "Banco Agibank S.A." },
  { value: "752", label: "Banco Bari de Investimentos e Financiamentos S.A." },
  { value: "318", label: "Banco BMG S.A." },
  { value: "237", label: "Banco Bradesco S.A." },
  { value: "208", label: "Banco BTG Pactual S.A." },
  { value: "336", label: "Banco C6 Consignado S.A." },
  { value: "756", label: "Banco Cooperativo Sicoob S.A." },
  { value: "748", label: "Banco Cooperativo Sicredi S.A." },
  { value: "707", label: "Banco Daycoval S.A." },
  { value: "260", label: "Banco Digio S.A." },
  { value: "001", label: "Banco do Brasil S.A." },
  { value: "041", label: "Banco do Estado do Rio Grande do Sul S.A." },
  { value: "630", label: "Banco Inbursa S.A." },
  { value: "077", label: "Banco Inter S.A." },
  { value: "389", label: "Banco Master S.A." },
  { value: "389", label: "Banco Mercantil do Brasil S.A." },
  { value: "623", label: "Banco Pan S.A." },
  { value: "643", label: "Banco Paulista S.A." },
  { value: "643", label: "Banco Pine S.A." },
  { value: "634", label: "Banco Ribeirão Preto S.A." },
  { value: "422", label: "Banco Safra S.A." },
  { value: "033", label: "Banco Santander (Brasil) S.A." },
  { value: "655", label: "Banco Votorantim S.A." },
  { value: "VR", label: "Banco VR S.A." }, // Sem código FEBRABAN formal
  { value: "021", label: "Banestes S.A. – Banco do Estado do Espírito Santo" },
  { value: "318", label: "BMP Sociedade de Crédito Direto S.A." },
  { value: "318", label: "CDC Sociedade de Crédito Direto S.A." },
  { value: "318", label: "Capital Consig Sociedade de Crédito Direto S.A." },
]

export const tipoContaOptions: OptionSelectString[] = [
  { value: "CC", label: "CC" },
  { value: "CP", label: "CP" },
  { value: "CM", label: "CM" },
]

export const nacionalidadeOptions: OptionSelectNumber[] = [
  { value: 1, label: "Brasil" }
]

export const beneficiosOptions: OptionSelectString[] = [
  { value: "41", label: "41" },
  { value: "42", label: "42" },
  { value: "43", label: "43" },
  { value: "44", label: "44" },
  { value: "45", label: "45" },
  { value: "46", label: "46" },
  { value: "47", label: "47" },
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
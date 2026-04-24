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

export const grauInstrucaoOptions: OptionSelect[] = [
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

export const bancosOptions: OptionSelect[] = [
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

export const tipoContaOptions: OptionSelect[] = [
  { value: "CC", label: "CC" },
  { value: "CP", label: "CP" },
  { value: "CM", label: "CM" },
]

export const beneficiosOptions: OptionSelect[] = [
  { value: "41", label: "41" },
  { value: "42", label: "42" },
  { value: "43", label: "43" },
  { value: "44", label: "44" },
  { value: "45", label: "45" },
  { value: "46", label: "46" },
  { value: "47", label: "47" },
]

export const conveniosOptions: OptionSelect[] = [
  { value: "INSS", label: "INSS" },
  { value: "Federal Civil", label: "Federal Civil" },
  { value: "Aeronautica", label: "Aeronáutica" },
  { value: "Exercito", label: "Exército" },
  { value: "Marinha", label: "Marinha" },
  { value: "Estadual", label: "Estadual" },
  { value: "Municipal", label: "Municipal" },
  { value: "Empresa Privada", label: "Empresa Privada" },
  { value: "Seguro", label: "Seguro" },
  { value: "Assoc Servidores", label: "Assoc. Servidores" },
  { value: "Tribunal de Justica", label: "Tribunal de Justiça" },
  { value: "FGTS", label: "FGTS" },
  { value: "Auxílio Brasil", label: "Auxílio Brasil" },
  { value: "Cartão Benefício", label: "Cartão Benefício" },
  { value: "Veículos", label: "Veículos" },
  { value: "Cartão Consignado", label: "Cartão Consignado" },
  { value: "Saque Complementar", label: "Saque Complementar" },
  { value: "Empréstimo CLT", label: "Empréstimo CLT" },
];
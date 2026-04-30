import * as Yup from "yup";
import validarCampo from "../../../utils/validar-campo";
import type { ArquivoUpload } from "../../../types/ArquivoUpload";

export const clienteSchema = Yup.object({
  id_cliente: Yup.number(),

  cpf: Yup.string().required('Campo obrigatório')
    .test('cpf', 'CPF inválido', value => {
      const result = value == '' ? true : validarCampo(value, "cpf")
      return result === true
    }),
  nome: Yup.string().required('Campo obrigatório'),
  sexo: Yup.string(),
  data_nascimento: Yup.string()
    .test('data_nascimento', 'Data inválida', value => {
      if (!value) return true
      const result = value == '' ? true : validarCampo(value, "data")
      return result === true
    }),
  naturalidade: Yup.string(),
  nacionalidade: Yup.number(),
  rg: Yup.string().required('Campo obrigatório'),
  data_emissao_rg: Yup.string()
    .test('data_emissao_rg', 'Data inválida', value => {
      if (!value) return true
      const result = value == '' ? true : validarCampo(value, "data")
      return result === true
    }),
  orgao_emissor_rg: Yup.string(),
  uf_rg: Yup.string(),
  telefone_1: Yup.string()
    .test('telefone_1', 'Telefone inválido', value => {
      if (!value) return true
      const result = value == '' ? true : validarCampo(value, "telefone")
      return result === true
    }),
  telefone_2: Yup.string()
    .test('telefone_2', 'Telefone inválido', value => {
      if (!value) return true
      const result = value == '' ? true : validarCampo(value, "telefone")
      return result === true
    }),
  telefone_3: Yup.string()
    .test('telefone_3', 'Telefone inválido', value => {
      if (!value) return true
      const result = value == '' ? true : validarCampo(value, "telefone")
      return result === true
    }),
  observacoes: Yup.string(),
  email: Yup.string(),

  info_bancarias: Yup.array().of(
    Yup.object({
      banco: Yup.number(),
      agencia: Yup.string(),
      tipo_conta: Yup.string(),
      conta: Yup.string()
    })
      .test('info_bancarias', 'Preencha todos os campos de informações bancarias', value => {
        const { banco, agencia, tipo_conta, conta } = value
        if (!banco && !agencia && !tipo_conta && !conta) return true
        return false
      })
  ).default([]),

  info_beneficio: Yup.array().of(
    Yup.object({
      beneficio: Yup.number(),
      convenio: Yup.number(),
      margem: Yup.string(),
    })
      .test('info_beneficio', 'Preencha todos os campos de informações do beneficio', value => {
        const { beneficio, convenio, margem } = value
        if (!beneficio && !convenio && !margem) return true
        return false
      })
  ).default([]),

  endereco: Yup.object({
    cep: Yup.string()
      .test('cep', 'Cep inválido', value => {
        if (!value) return true
        return value.length == 9 || value.length == 0
      }),
    rua: Yup.string(),
    cidade_estado: Yup.string(),
    bairro: Yup.string(),
    numero: Yup.string(),
    complemento: Yup.string(),
  }),

  nome_pai: Yup.string(),
  nome_mae: Yup.string(),
  grau_instrucao: Yup.number(),
  estado_civil: Yup.number(),
  endereco_correspondencia: Yup.string(),
  num_dependentes: Yup.number()
    .transform((value, originalValue) => {
      return originalValue === "" ? undefined : value;
    }),
  conjugue: Yup.object({
    nome: Yup.string(),
    data_nascimento: Yup.string()
      .test('conjugue.data_nascimento', 'Data inválida', value => {
        if (!value) return true
        const result = value == '' ? true : validarCampo(value, "data")
        return result === true
      }),
    documento: Yup.string(),
    naturalidade: Yup.string()
  }),

  documentos: Yup.mixed<ArquivoUpload[]>().nullable()

});

export type IClienteForm = Yup.InferType<typeof clienteSchema>;
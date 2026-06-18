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
  sexo: Yup.string().nullable(),
  data_nascimento: Yup.string()
    .nullable()
    .test('data_nascimento', 'Data inválida', value => {
      if (!value) return true
      const result = value == '' ? true : validarCampo(value, "data")
      return result === true
    }),
  naturalidade: Yup.string().nullable(),
  nacionalidade: Yup.number().nullable(),
  rg: Yup.string().required('Campo obrigatório'),
  data_emissao_rg: Yup.string()
    .nullable()
    .test('data_emissao_rg', 'Data inválida', value => {
      if (!value) return true
      const result = value == '' ? true : validarCampo(value, "data")
      return result === true
    }),
  orgao_emissor_rg: Yup.string().nullable(),
  uf_rg: Yup.string().nullable(),
  telefone_1: Yup.string()
    .nullable()
    .test('telefone_1', 'Telefone inválido', value => {
      if (!value) return true
      const result = value == '' ? true : validarCampo(value, "telefone")
      return result === true
    }),
  telefone_2: Yup.string()
    .nullable()
    .test('telefone_2', 'Telefone inválido', value => {
      if (!value) return true
      const result = value == '' ? true : validarCampo(value, "telefone")
      return result === true
    }),
  telefone_3: Yup.string()
    .nullable()
    .test('telefone_3', 'Telefone inválido', value => {
      if (!value) return true
      const result = value == '' ? true : validarCampo(value, "telefone")
      return result === true
    }),
  observacoes: Yup.string().nullable(),
  email: Yup.string().nullable(),

  info_bancarias: Yup.array().of(
    Yup.object({
      id: Yup.number(),
      banco: Yup.number(),
      agencia: Yup.string(),
      tipo_conta: Yup.string(),
      conta: Yup.string()
    })
      .test('info_bancarias', 'Preencha todos os campos de informações bancarias', value => {
        const { banco, agencia, tipo_conta, conta } = value

        const todosCamposPreenchidos = banco && agencia && tipo_conta && conta
        const nenhumCampoPreenchido = !banco && !agencia && !tipo_conta && !conta

        if (todosCamposPreenchidos || nenhumCampoPreenchido) return true
        return false
      })
  ).default([]),

  info_beneficio: Yup.array().of(
    Yup.object({
      id: Yup.number(),
      beneficio: Yup.number(),
      convenio: Yup.number(),
      margem: Yup.string(),
    })
      .test('info_beneficio', 'Preencha todos os campos de informações do beneficio', value => {
        const { beneficio, convenio, margem } = value

        const todosCamposPreenchidos = beneficio && convenio && margem
        const nenhumCampoPreenchido = !beneficio && !convenio && !margem

        if (todosCamposPreenchidos || nenhumCampoPreenchido) return true
        return false
      })
  ).default([]),

  endereco: Yup.object({
    cep: Yup.string()
      .nullable()
      .test('cep', 'Cep inválido', value => {
        if (!value) return true
        return value.length == 9 || value.length == 0
      }),
    rua: Yup.string().nullable(),
    cidade_estado: Yup.string().nullable(),
    bairro: Yup.string().nullable(),
    numero: Yup.string().nullable(),
    complemento: Yup.string().nullable(),
  }),

  nome_pai: Yup.string().nullable(),
  nome_mae: Yup.string().nullable(),
  grau_instrucao: Yup.number().nullable(),
  estado_civil: Yup.number().nullable(),
  endereco_correspondencia: Yup.string().nullable(),
  num_dependentes: Yup.number()
    .nullable()
    .transform((value, originalValue) => {
      return originalValue === "" ? undefined : value;
    }),
  conjugue: Yup.object({
    nome: Yup.string().nullable(),
    data_nascimento: Yup.string()
      .nullable()
      .test('conjugue.data_nascimento', 'Data inválida', value => {
        if (!value) return true
        const result = value == '' ? true : validarCampo(value, "data")
        return result === true
      }),
    documento: Yup.string().nullable(),
    naturalidade: Yup.string().nullable()
  }),

  documentos: Yup.mixed<ArquivoUpload[]>().nullable()

});

export type IClienteForm = Yup.InferType<typeof clienteSchema>;
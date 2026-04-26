import * as Yup from "yup";
import validarCampo from "../../../utils/validar-campo";
import type { ArquivoUpload } from "../../../types/ArquivoUpload";

export const clienteSchema = Yup.object({
  id_cliente: Yup.number().default(0),

  cpf: Yup.string().required('Campo obrigatório')
    .test('cpf', 'CPF inválido', value => {
      const result = value == '' ? true : validarCampo(value, "cpf")
      return result === true
    }),
  nome: Yup.string().required('Campo obrigatório'),
  sexo: Yup.string().required('Campo obrigatório'),
  data_nascimento: Yup.string().default('')
    .test('data_nascimento', 'Data inválida', value => {
      const result = value == '' ? true : validarCampo(value, "data")
      return result === true
    }),
  naturalidade: Yup.string().default(''),
  nacionalidade: Yup.number(),
  rg: Yup.string().required('Campo obrigatório'),
  data_emissao_rg: Yup.string().required('Campo obrigatório')
    .test('data_emissao_rg', 'Data inválida', value => {
      const result = value == '' ? true : validarCampo(value, "data")
      return result === true
    }),
  orgao_emissor_rg: Yup.string().required('Campo obrigatório'),
  uf_rg: Yup.string().required('Campo obrigatório'),
  telefone_1: Yup.string().default('')
    .test('telefone_1', 'Telefone inválido', value => {
      const result = value == '' ? true : validarCampo(value, "telefone")
      return result === true
    }),
  telefone_2: Yup.string().default('')
    .test('telefone_2', 'Telefone inválido', value => {
      const result = value == '' ? true : validarCampo(value, "telefone")
      return result === true
    }),
  telefone_3: Yup.string().default('')
    .test('telefone_3', 'Telefone inválido', value => {
      const result = value == '' ? true : validarCampo(value, "telefone")
      return result === true
    }),
  observacoes: Yup.string().default(''),
  email: Yup.string().default(''),

  info_bancarias: Yup.array().of(
    Yup.object({
      banco: Yup.string().default(''),
      agencia: Yup.string().default(''),
      tipo_conta: Yup.string().default(''),
      conta: Yup.string().default('')
    })
  ).default([]),

  info_beneficio: Yup.array().of(
    Yup.object({
      beneficio: Yup.string().default(''),
      convenio: Yup.number(),
      margem: Yup.string().default(''),
    })
  ).default([]), 

  endereco: Yup.object({
    cep: Yup.string().default('')
      .test('cep', 'Cep inválido', value => {
        return value.length == 9 || value.length == 0
      }),
    rua: Yup.string().default(''),
    cidade_estado: Yup.string().default(''),
    bairro: Yup.string().default(''),
    numero: Yup.string().default(''),
    complemento: Yup.string().default(''),
  }),



  nome_pai: Yup.string().default(''),
  nome_mae: Yup.string().default(''),
  grau_instrucao: Yup.number(),
  estado_civil: Yup.number(),
  endereco_correspondencia: Yup.string().default(''),
  num_dependentes: Yup.number(),
  conjugue: Yup.object({
    nome: Yup.string().default(''),
    data_nascimento: Yup.string().default('')
      .test('conjugue.data_nascimento', 'Data inválida', value => {
        const result = value == '' ? true : validarCampo(value, "data")
        return result === true
      }),
    documento: Yup.string().default(''),
    naturalidade: Yup.string().default('')
  }),

  documentos: Yup.mixed<ArquivoUpload[]>().nullable()

});

export type IClienteForm = Yup.InferType<typeof clienteSchema>;
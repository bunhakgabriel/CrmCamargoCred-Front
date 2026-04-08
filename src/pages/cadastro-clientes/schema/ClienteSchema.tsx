import * as Yup from "yup";
import validarCampo from "../../../utils/validar-campo";

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
  nacionalidade: Yup.string().default(''),


  rg: Yup.string().required('Campo obrigatório'),
  data_emissao_rg: Yup.string().required('Campo obrigatório')
    .test('data_emissao_rg', 'Data inválida', value => {
      const result = value == '' ? true : validarCampo(value, "data")
      return result === true
    }),
  orgao_emissor_rg: Yup.string().required('Campo obrigatório'),
  uf_rg: Yup.string().required('Campo obrigatório'),

  observacoes: Yup.string().default(''),
  email: Yup.string().default(''),


  telefone: Yup.string().default('')
    .test('telefone', 'Telefone inválido', value => {
      const result = value == '' ? true : validarCampo(value, "telefone")
      return result === true
    }),


  conjugue: Yup.object({
    nome: Yup.string().default(''),
    data_nascimento: Yup.string().default('')
    .test('conjugue.data_nascimento', 'Data inválida', value => {
      const result = value == '' ? true : validarCampo(value, "data")
      return result === true
    }),
    documento: Yup.string().default(''),
    naturalidade: Yup.string().default('')
  }).nullable(),

});

export type IClienteForm = Yup.InferType<typeof clienteSchema>;
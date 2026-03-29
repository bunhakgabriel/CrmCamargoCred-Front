import * as Yup from "yup";
import validarCampo from "../../../utils/validar-campo";

export const clienteSchema = Yup.object({
  id_cliente: Yup.number().default(0),
  nome: Yup.string().required('Campo obrigatório'),
  cpf: Yup.string().required('Campo obrigatório')
    .test('cpf', 'CPF inválido', value => {
      const result = value == '' ? true : validarCampo(value, "cpf")
      return result === true
    }),
  rg: Yup.string().required('Campo obrigatório'),
  naturalidade: Yup.string().default(''),
  data_nascimento: Yup.string().default('')
    .test('data_nascimento', 'Data inválida', value => {
      const result = value == '' ? true : validarCampo(value, "data")
      return result === true
    }),
  telefone: Yup.string().default('')
    .test('telefone', 'Telefone inválido', value => {
      const result = value == '' ? true : validarCampo(value, "telefone")
      return result === true
    })
});

export type IClienteForm = Yup.InferType<typeof clienteSchema>;
import * as Yup from "yup";
import validarCampo from "../../../utils/validar-campo";

export const clienteSchema = Yup.object({
  nome: Yup.string().required('Campo obrigatório'),
  cpf: Yup.string().required('Campo obrigatório'),
  rg: Yup.string().required('Campo obrigatório'),
  naturalidade: Yup.string().default(''),
  dataNascimento: Yup.string().default(''),
  telefone: Yup.string().default('')
    .test('telefone', 'Telefone inválido', value => {
      debugger
      const result = value == '' ? true : validarCampo(value, "telefone")
      return result === true
    }),
});

export type IClienteForm = Yup.InferType<typeof clienteSchema>;
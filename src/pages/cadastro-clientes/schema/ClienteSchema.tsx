import * as Yup from "yup";

export const clienteSchema = Yup.object({
  nome: Yup.string().required('Nome obrigatório'),
  cpf: Yup.string().required('CPF obrigatório'),
  dataNascimento: Yup.string().required('Data obrigatória'),
  telefone: Yup.string().required('Telefone obrigatório')
});

export type IClienteForm = Yup.InferType<typeof clienteSchema>;
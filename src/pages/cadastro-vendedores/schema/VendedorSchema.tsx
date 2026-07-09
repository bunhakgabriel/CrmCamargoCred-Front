import * as Yup from "yup";
import validarCampo from "../../../utils/validar-campo";

export const vendedorSchema = Yup.object({
    id_vendedor: Yup.number(),
    nome: Yup.string().required('Campo obrigatório'),
    telefone: Yup.string()
        .nullable()
        .test('telefone', 'Telefone inválido', value => {
            if (!value) return true
            const result = value == '' ? true : validarCampo(value, "telefone")
            return result === true
        }),
    observacoes: Yup.string().nullable(),
})

export type IVendedorForm = Yup.InferType<typeof vendedorSchema>;
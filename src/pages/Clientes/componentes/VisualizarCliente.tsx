import type { ICliente } from "../../../interfaces/ICliente";
import Modal from "react-modal";
import { FiX, FiPrinter } from "react-icons/fi";
import { parseClienteResponse } from "../../cadastro-clientes/parser/parseCliente";

type VisualizarClienteProps = {
    data: ICliente | null;
    onClose: () => void;
};

function field(value: any) {
    return value ?? " Não informado";
}

export default function VisualizarCliente({ data, onClose }: VisualizarClienteProps) {
    if (!data) return null;
    debugger
    const cliente = parseClienteResponse(data)

    const handlePrint = () => {
        window.print();
    };

    return (
        <Modal
            isOpen={!!cliente}
            onRequestClose={onClose}
            className="max-w-6xl w-full mx-auto mt-10 bg-white rounded-2xl shadow-xl outline-none print:shadow-none print:mt-0"
            overlayClassName="fixed inset-0 bg-black/40 flex justify-center items-start overflow-auto print:bg-white"
        >
            <div className="p-6 space-y-6 print:p-2">

                {/* HEADER */}
                <div className="flex justify-between items-start border-b pb-4 print:border-none">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">
                            {cliente.nome}
                        </h1>
                        <p className="text-gray-500">CPF: {cliente.cpf}</p>
                    </div>

                    <div className="flex items-center gap-3 print:hidden">
                        <FiPrinter
                            size={20}
                            onClick={handlePrint}
                            className="cursor-pointer text-gray-600 hover:text-blue-600 transition"
                            title="Imprimir"
                        />

                        <FiX
                            size={22}
                            onClick={onClose}
                            className="cursor-pointer text-gray-600 hover:text-red-500 transition"
                        />
                    </div>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* DADOS PESSOAIS */}
                    <div className="bg-gray-50 rounded-xl p-4 shadow-sm print:bg-white print:shadow-none">
                        <h2 className="font-semibold text-lg mb-3">Dados Pessoais</h2>

                        <div className="space-y-1 text-sm">
                            <p><b>Sexo:</b> {field(cliente.sexo)}</p>
                            <p><b>Nascimento:</b> {field(cliente.data_nascimento)}</p>
                            <p><b>Naturalidade:</b> {field(cliente.naturalidade)}</p>
                            <p><b>Nacionalidade:</b> {field(cliente.nacionalidade)}</p>
                            <p><b>RG:</b> {field(cliente.rg)}</p>
                            <p><b>Emissão:</b> {field(cliente.data_emissao_rg)}</p>
                            <p><b>Órgão:</b> {field(cliente.orgao_emissor_rg)}</p>
                            <p><b>UF:</b> {field(cliente.uf_rg)}</p>
                        </div>
                    </div>

                    {/* CONTATO */}
                    <div className="bg-gray-50 rounded-xl p-4 shadow-sm print:bg-white print:shadow-none">
                        <h2 className="font-semibold text-lg mb-3">Contato</h2>

                        <div className="space-y-1 text-sm">
                            <p><b>Email:</b> {field(cliente.email)}</p>
                            <p><b>Telefone 1:</b> {field(cliente.telefone_1)}</p>
                            <p><b>Telefone 2:</b> {field(cliente.telefone_2)}</p>
                            <p><b>Telefone 3:</b> {field(cliente.telefone_3)}</p>
                        </div>
                    </div>

                    {/* ENDEREÇO */}
                    <div className="bg-gray-50 rounded-xl p-4 shadow-sm md:col-span-2 print:bg-white print:shadow-none">
                        <h2 className="font-semibold text-lg mb-3">Endereço</h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                            <p><b>CEP:</b> {field(cliente.endereco?.cep)}</p>
                            <p><b>Rua:</b> {field(cliente.endereco?.rua)}</p>
                            <p><b>Número:</b> {field(cliente.endereco?.numero)}</p>
                            <p><b>Bairro:</b> {field(cliente.endereco?.bairro)}</p>
                            <p><b>Cidade:</b> {field(cliente.endereco?.cidade_estado)}</p>
                            <p><b>Complemento:</b> {field(cliente.endereco?.complemento)}</p>
                        </div>
                    </div>

                    {/* ADICIONAIS */}
                    <div className="bg-gray-50 rounded-xl p-4 shadow-sm md:col-span-2 print:bg-white print:shadow-none">
                        <h2 className="font-semibold text-lg mb-3">Informações Adicionais</h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                            <p><b>Pai:</b> {field(cliente.nome_pai)}</p>
                            <p><b>Mãe:</b> {field(cliente.nome_mae)}</p>
                            <p><b>Instrução:</b> {field(cliente.grau_instrucao)}</p>
                            <p><b>Estado Civil:</b> {field(cliente.estado_civil)}</p>
                            <p><b>Dependentes:</b> {field(cliente.num_dependentes)}</p>
                            <p><b>Correspondência:</b> {field(cliente.endereco_correspondencia)}</p>
                        </div>

                        <div className="mt-3 text-sm">
                            <b>Observações:</b> {field(cliente.observacoes)}
                        </div>
                    </div>

                    {/* CONJUGE */}
                    {cliente.conjugue && (
                        <div className="bg-gray-50 rounded-xl p-4 shadow-sm md:col-span-2 print:bg-white print:shadow-none">
                            <h2 className="font-semibold text-lg mb-3">Cônjuge</h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                                <p><b>Nome:</b> {field(cliente.conjugue.nome)}</p>
                                <p><b>Nascimento:</b> {field(cliente.conjugue.data_nascimento)}</p>
                                <p><b>Documento:</b> {field(cliente.conjugue.documento)}</p>
                                <p><b>Naturalidade:</b> {field(cliente.conjugue.naturalidade)}</p>
                            </div>
                        </div>
                    )}

                    {/* BANCOS */}
                    {cliente.info_bancarias?.length > 0 && (
                        <div className="bg-gray-50 rounded-xl p-4 shadow-sm md:col-span-2 print:bg-white print:shadow-none">
                            <h2 className="font-semibold text-lg mb-3">Contas Bancárias</h2>

                            <div className="space-y-2">
                                {cliente.info_bancarias.map((banco) => (
                                    <div key={banco.id} className="border rounded-lg p-3 text-sm bg-white">
                                        <p><b>Banco:</b> {banco.banco}</p>
                                        <p><b>Agência:</b> {banco.agencia}</p>
                                        <p><b>Conta:</b> {banco.conta}</p>
                                        <p><b>Tipo:</b> {banco.tipo_conta}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* BENEFÍCIOS */}
                    {cliente.info_beneficio?.length > 0 && (
                        <div className="bg-gray-50 rounded-xl p-4 shadow-sm md:col-span-2 print:bg-white print:shadow-none">
                            <h2 className="font-semibold text-lg mb-3">Benefícios</h2>

                            <div className="space-y-2">
                                {cliente.info_beneficio.map((b) => (
                                    <div key={b.id} className="border rounded-lg p-3 text-sm bg-white">
                                        <p><b>Benefício:</b> {b.beneficio}</p>
                                        <p><b>Convênio:</b> {b.convenio}</p>
                                        <p><b>Margem:</b> {b.margem}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </Modal>
    );
}






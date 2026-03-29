import Modal from "react-modal";
import CadastroCliente from "../../cadastro-clientes/CadastroCliente";
import type { ICliente } from "../../../interfaces/ICliente";

type EditarClienteProps = {
  cliente: ICliente | null;
  onClose: () => void;
};

export default function EditarCliente({ cliente, onClose }: EditarClienteProps) {
  return (
    <Modal isOpen={!!cliente} onRequestClose={onClose}>
        <CadastroCliente onCloseModal={onClose} cliente={cliente} />
    </Modal>
  );
}
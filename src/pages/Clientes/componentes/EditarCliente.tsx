import Modal from "react-modal";
import CadastroCliente from "../../cadastro-clientes/CadastroCliente";
import type { ICliente } from "../../../interfaces/ICliente";

type EditarClienteProps = {
  cliente: ICliente | null;
  onClose: () => void;
  resetGrid: () => void;
};

export default function EditarCliente({ cliente, onClose, resetGrid }: EditarClienteProps) {
  return (
    <Modal isOpen={!!cliente} onRequestClose={onClose}>
      <CadastroCliente
        onCloseModal={onClose}
        cliente={cliente}
        resetGrid={resetGrid}
      />
    </Modal>
  );
}
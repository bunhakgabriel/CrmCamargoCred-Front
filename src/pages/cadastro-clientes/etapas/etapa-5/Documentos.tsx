import UploadFiles from "../../../../componentes/upload-files/UploadFiles";

export default function Documentos() {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-gray-500 font-semibold text-sm">DOCUMENTOS</h3>
            <UploadFiles />
        </div>
    )
}
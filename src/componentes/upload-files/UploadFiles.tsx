import { useState } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { IoAdd, IoDocumentText, IoDownload, IoEye, IoTrash } from "react-icons/io5"
import type { IClienteForm } from "../../pages/cadastro-clientes/schema/ClienteSchema";
import ConfirmDelete from "../confirm-delete/ConfirmDelete";
import type { ArquivoUpload } from "../../types/ArquivoUpload";

export default function UploadFiles() {
  const [fileDelete, setFileDelete] = useState<ArquivoUpload | null>(null)
  const { control, getValues } = useFormContext<IClienteForm>();

  async function handleDownload(file: ArquivoUpload) {
    const fileUrl = file.url || (file.file ? URL.createObjectURL(file.file) : null)
    const fileName =
      file.file?.name ||
      file.url?.split('/').pop()?.substring(37)

    if (!fileUrl) return

    const response = await fetch(fileUrl)
    const blob = await response.blob()

    const url = window.URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = fileName || 'arquivo'
    document.body.appendChild(a)
    a.click()

    a.remove()
    window.URL.revokeObjectURL(url)
  }

  return (
    <Controller
      control={control}
      name="documentos"
      render={({ field }) => {

        const handleAddFile = (e: React.ChangeEvent<HTMLInputElement>) => {
          const files = e.target.files
          if (!files || files.length === 0) return

          const existingFiles = getValues('documentos') || []

          const newFiles =
            Array.from(files)
              .map(item => {
                return { file: item, url: null }
              })
              .filter(newFile => {
                return !existingFiles.some(existingFile => {
                  return newFile?.file?.name == existingFile?.file?.name ||
                    existingFile?.url?.includes(newFile?.file?.name.replaceAll(' ', '_'))
                })
              })

          field.onChange([...existingFiles, ...newFiles])
          e.target.value = ''
        }

        const handleDeleteFile = (file: ArquivoUpload | null) => {
          if (!file) return

          const existingFiles = getValues('documentos') || []

          const updatedFiles = existingFiles.filter(existingFile => {
            const validate1 = existingFile?.file && file?.file &&
              existingFile?.file?.name === file?.file?.name
            if (validate1) return false

            const validate2 = existingFile?.url?.includes((file.url || file.file?.name) as string)
            if (validate2) return false

            return true
          })

          field.onChange(updatedFiles)
          setFileDelete(null)
        }

        return (
          <div>
            <label
              htmlFor="upload"
              className='w-14 h-14 border-2 border-dashed rounded-lg flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-50 transition'
            >
              <IoAdd size={30} />
            </label>

            <input
              id="upload"
              type="file"
              multiple
              accept="image/*, application/pdf"
              className="hidden"
              onChange={handleAddFile}
            />

            <div className="flex flex-col gap-2 py-2">
              {field.value?.map((file: ArquivoUpload) => {

                const fileName = file.file?.name || file.url?.split('/').pop()?.substring(37)
                const fileUrl = file.url || (file.file ? URL.createObjectURL(file.file) : null)

                return (
                  <div
                    key={file.file
                      ? `${file.file.name}-${file.file.size}`
                      : file.url
                    }
                    className="flex items-center justify-between rounded-lg px-3 py-2 bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <IoDocumentText className="text-gray-500 shrink-0" size={18} />

                      <span className="text-sm text-gray-700 truncate max-w-50">
                        {fileName}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">

                      <button
                        type="button"
                        onClick={() => {
                          if (!fileUrl) return
                          window.open(fileUrl, "_blank")
                        }}
                        className="text-blue-500 hover:text-blue-600 transition cursor-pointer"
                      >
                        <IoEye size={18} />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDownload(file)}
                        className="text-gray-600 hover:text-gray-800 transition"
                      >
                        <IoDownload size={18} />
                      </button>

                      <button
                        onClick={() => setFileDelete(file)}
                        type="button"
                        className="text-red-500 hover:text-red-600 transition cursor-pointer"
                      >
                        <IoTrash size={18} />
                      </button>

                    </div>
                  </div>
                )
              })}
            </div>

            <ConfirmDelete
              open={!!fileDelete}
              onCancel={() => setFileDelete(null)}
              onConfirm={() => handleDeleteFile(fileDelete)}
            />
          </div>
        )
      }}
    />
  )
}
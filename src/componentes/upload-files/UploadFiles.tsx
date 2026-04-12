import { useEffect } from "react"
import { Controller, useFormContext, useWatch, type Control, type FieldValues, type Path } from "react-hook-form"
import { IoAdd } from "react-icons/io5"
import type { IClienteForm } from "../../pages/cadastro-clientes/schema/ClienteSchema";

export default function UploadFiles() {

  const { register, formState: { errors }, control } = useFormContext<IClienteForm>();

    const obj = useWatch({ control })

    useEffect(() => {
        console.log(obj)
    }, [obj])

  return (
    <Controller
      control={control}
      name="documentos"
      render={({ field }) => {

        const handleAddFile = (e: React.ChangeEvent<HTMLInputElement>) => {
          debugger
          const files = e.target.files
          if (!files || files.length === 0) return

          const filesArray = Array.from(files)

          field.onChange(filesArray)
        }

        return (
          <div>
            <label
              htmlFor="upload"
              className='w-21 h-21 border-2 border-dashed rounded-lg flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-50 transition'
            >
              <IoAdd size={40} />
            </label>

            <input
              id="upload"
              type="file"
              multiple
              accept="image/*, application/pdf"
              className="hidden"
              onChange={handleAddFile}
            />

            {/* 👇 apenas para visualização */}
            <div className="mt-2 flex flex-col gap-1">
              {field.value?.map((file: File, index: number) => (
                <span key={index} className="text-sm text-gray-600">
                  {file.name}
                </span>
              ))}
            </div>
          </div>
        )
      }}
    />
  )
}
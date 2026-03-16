import clsx from "clsx"
import type {
    FieldError,
    FieldValues,
    Path,
    UseFormRegister
} from "react-hook-form"

type InputSimplesProps<T extends FieldValues> = {
  col?: 2 | 4 | 6 | 8 | 12
  label: string
  name: Path<T>
  register: UseFormRegister<T>
  error?: FieldError
  mask?: (value: string) => string
  maxLength?: number
}

export default function InputSimples<T extends FieldValues>({
  col,
  label,
  name,
  register,
  error,
  mask,
  maxLength
}: InputSimplesProps<T>) {

  const registerProps = register(name, {
    onChange: mask
      ? (e) => {
          e.target.value = mask(e.target.value)
        }
      : undefined
  })

  return (
    <div className={`flex flex-col gap-1 col-span-${col}`}>
      <label className="text-xs text-gray-700">{label}</label>

      <input
        {...registerProps}
        maxLength={maxLength}
        className={clsx(
          "h-10 border border-gray-300 bg-gray-50 rounded-lg px-2 py-0.5 text-sm",
          { "border-red-500": error }
        )}
        type="text"
      />

      {error && (
        <span className="text-red-500 text-xs">{error.message}</span>
      )}
    </div>
  )
}
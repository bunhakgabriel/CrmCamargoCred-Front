import clsx from "clsx"
import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister
} from "react-hook-form"

type InputSimplesProps<T extends FieldValues> = {
  label: string
  name: Path<T>
  register: UseFormRegister<T>
  error?: FieldError
  mask?: (value: string) => string
  maxLength?: number
  type?: 'text' | 'textArea'
  disabled?: boolean
}

export default function InputSimples<T extends FieldValues>({
  label,
  name,
  register,
  error,
  mask,
  maxLength,
  type = 'text',
  disabled
}: InputSimplesProps<T>) {

  const registerProps = register(name, {
    onChange: mask
      ? (e) => {
        e.target.value = mask(e.target.value)
      }
      : undefined
  })

  if (type == 'text') {
    return (
      <div className={`flex flex-col gap-1 w-full`}>
        <label className="text-xs text-gray-700">{label}</label>

        <input
          {...registerProps}
          maxLength={maxLength}
          className={clsx(
            "h-10 border border-gray-300 bg-gray-50 rounded-lg px-2 py-0.5 text-sm",
            { "border-red-500": error },
            { "bg-gray-200": disabled }
          )}
          type="text"
          disabled={disabled}
        />

        {error && (
          <span className="text-red-500 text-xs">{error.message}</span>
        )}
      </div>
    )
  } else if (type == 'textArea') {
    return (
      <div className={`flex flex-col gap-1 w-full`}>
        <label className="text-xs text-gray-700">{label}</label>
        <textarea
          {...registerProps}
          maxLength={maxLength}
          className={clsx(
            "border border-gray-300 bg-gray-50 rounded-lg px-2 py-1 text-sm h-20",
            { "border-red-500": error }
          )}
        />
        {error && (
          <span className="text-red-500 text-xs">{error.message}</span>
        )}
      </div>
    )
  }
}
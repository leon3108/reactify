import * as React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & { icon?: React.ReactNode }
>(({ className, type, icon, ...props }, ref) => {
  return (
    <div className="relative flex h-12 w-96 items-center">
      <input
        type="text"
        className="hover:bg-black-200 h-full w-full rounded-3xl border border-none bg-black-500 py-2 pl-14 pr-4 placeholder:text-[#747475] hover:border-[#414040] focus:outline-none focus:ring-2 focus:ring-white"
        {...props}
      />
      <div className="pointer-events-none absolute left-0 flex items-center pl-3">
        {icon && (
          <div className="flex h-full items-center rounded-l-3xl  px-2 transition-colors duration-200 ease-in-out ">
            {icon}
          </div>
        )}
      </div>
    </div>
  )
})
Input.displayName = 'Input'

export { Input }

import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & { icon?: React.ReactNode }
>(({ className, type, icon, ...props }, ref) => {
  return (
    <div
      className={cn(
        'bg-black-500 flex h-12 w-full items-center rounded-3xl border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
    >
      {icon && <div className="mr-2">{icon}</div>}
      <input
        type={type}
        ref={ref}
        className="bg-black-500 placeholder:text-[#747475]"
        {...props}
      />
    </div>
  )
})
Input.displayName = 'Input'

export { Input }

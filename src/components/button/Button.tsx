import React, { ComponentProps } from 'react'
type TVariant = "primary" | "secondary" | "danger" | "warning" | "success"

type TButton = ComponentProps<"button"> & {
    variant: TVariant
}

function Button({children, variant, ...rest}: TButton) {
  return (
    <button {...rest}>
        {children}
    </button>
  )
}

export default Button
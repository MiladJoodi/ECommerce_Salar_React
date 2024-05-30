import React, { ComponentProps } from 'react'
type TVariant = "primary" | "secondary" | "danger" | "warning" | "success"

type TButton = ComponentProps<"button"> & {
    variant: TVariant
}

function Button({children, variant, ...rest}: TButton) {

  console.log(checkVariant(variant))

  return (
    <button {...rest}>
        {children}
    </button>
  )
}

export default Button;

function checkVariant(variant){
  if(variant === "primary"){
    return {backgroundColor: "blue"}
  }
}
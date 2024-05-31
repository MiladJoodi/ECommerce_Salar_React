import React, { ComponentProps } from 'react'
type TVariant = "primary" | "secondary" | "danger" | "warning" | "success"

type TButton = ComponentProps<"button"> & {
    variant: TVariant
}

function Button({children, variant, style, ...rest}: TButton) {

  console.log(checkVariant(variant))

  return (
    <button {...rest} style={{...style, ...checkVariant(variant)}}>
        {children}
    </button>
  )
}

export default Button;

function checkVariant(variant:TVariant){
  if(variant === "primary"){
    return {backgroundColor: "blue", color: "white"};
  } else if(variant === "secondary"){
    return {backgroundColor: "gray", color: "black"};
  } 
  else if(variant === "danger"){
    return {backgroundColor: "gray", color: "black"}
  }
  else if(variant === "success"){
    return {backgroundColor: "gray", color: "black"}
  }
  else if(variant === "warning"){
    return {backgroundColor: "yellow", color: "white"}
  }
}
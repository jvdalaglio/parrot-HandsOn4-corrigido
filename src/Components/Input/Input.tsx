import { InputHTMLAttributes } from "react"
import { InputStyle } from "./InputStyle"


export function Input({type, placeholder, ...rest}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputStyle type={type} placeholder={placeholder} {...rest}/>
  )
}
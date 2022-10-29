import { ButtonHTMLAttributes } from "react"
import { ButtonStyle } from "./Button.style"


export function Button({type, placeholder, ...rest}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonStyle {...rest}/>
  )
}
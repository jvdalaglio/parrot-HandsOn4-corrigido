import { ButtonHTMLAttributes } from "react"
import { ButtonStyle } from "./Button.style"


export function Button({type, className, ...rest}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonStyle className={className} />
  )
}
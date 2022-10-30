import { ButtonHTMLAttributes } from "react"
import { ButtonStyle} from "./Button.style"


export function Button({className, ...rest}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonStyle className={className} {...rest}/>
  )
}
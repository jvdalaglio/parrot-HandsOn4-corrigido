import {NavStyle} from "./Navbar.style"
import { CustomLink } from "../CustomLink/CustomLink.style"

export function NavBar({...rest}) {
  return (
    <NavStyle>
      <img src="/public/logo-nav.svg" alt="" />
      <div className="hello">
      <strong>Olá, usuário</strong>
      <CustomLink to={"/"} fontSize={16} color={"#6033AA"} style={{paddingLeft:5}}>sair</CustomLink>
      </div>
    </NavStyle>
  )
}
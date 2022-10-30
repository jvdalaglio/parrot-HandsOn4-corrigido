import {NavStyle} from "./Navbar.style"
import { CustomLink } from "../CustomLink/CustomLink.style"

export function NavBar() {
  return (
    <NavStyle>
      <img src="/public/logo-nav.svg" alt="" />
      <div className="hello">
      <strong>Olá, usuário |</strong>
      <CustomLink to={"/"}>sair</CustomLink>
      </div>
    </NavStyle>
  )
}
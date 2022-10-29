import { Deslogado } from "../Components/Layout/Deslogado";
import { Input } from "../Components/Input/Input";
import { Button } from "../Components/Button/Button"
import { CustomLink } from "../Components/CustomLink/CustomLink.style";

export function Login() {
  return(
    <Deslogado title="LOGIN">
      <Input placeholder="email" type="email"></Input>
      <Input placeholder="senha" type="password"></Input>
      <Button>entrar</Button>
      <CustomLink to={"/cadastro"} fontSize={16} marginTop={39} color={"#555555"} >cadastre-se</CustomLink>
    </Deslogado>
  )
}
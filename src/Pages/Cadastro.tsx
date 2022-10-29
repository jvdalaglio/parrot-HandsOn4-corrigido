import { Deslogado } from "../Components/Layout/Deslogado";
import { Input } from "../Components/Input/Input";
import { Button } from "../Components/Button/Button"
import { CustomLink } from "../Components/CustomLink/CustomLink.style";

export function Cadastro() {
  return(
    <Deslogado title="CADASTRO">
    <Input placeholder="nome" type="text"></Input>
    <Input placeholder="email" type="email"></Input>
    <Input placeholder="senha" type="password"></Input>
    <Input placeholder="confirmar senha" type="password"></Input>
    <Input placeholder="unidade/apartamento" type="text"></Input>
    <Input placeholder="link da foto" type="url"></Input>
    <Button type="submit" style={{marginBottom:45, marginTop:55}}>entrar</Button>
    </Deslogado>
  )
}
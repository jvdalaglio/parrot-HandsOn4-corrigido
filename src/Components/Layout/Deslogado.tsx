import { ReactNode } from "react";
import { DeslogadoStyle, Card } from "./Deslogado.style";
import {CustomLink} from "../CustomLink/CustomLink.style"

type DeslogadoProps = {
  title: string;
  children: ReactNode;
}

export function Deslogado(props: DeslogadoProps){
  return (
    <DeslogadoStyle>
      <Card>
        <CustomLink to={"/"}><img src="/public/logo-card.svg" alt="" /></CustomLink>
        <h1>{props.title}</h1>
        {props.children}
      </Card>
    </DeslogadoStyle>
  );
}
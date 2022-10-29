import { ReactNode } from "react";
import { DeslogadoStyle, Card } from "./Deslogado.style";

type DeslogadoProps = {
  title: string;
  children: ReactNode;
}

export function Deslogado(props: DeslogadoProps){
  return (
    <DeslogadoStyle>
      <Card>
        <img src="/public/logo-card.svg" alt="" />
        <h1>{props.title}</h1>
        {props.children}
      </Card>
    </DeslogadoStyle>
  );
}
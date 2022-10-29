import { ReactNode } from "react";
import { DeslogadoStyle } from "./Deslogado.style";

type DeslogadoProps = {
  title: string;
  children: ReactNode;
}

export function Deslogado(props: DeslogadoProps){
  return (
    <DeslogadoStyle>
      <div>
        <img src="" alt="" />
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </DeslogadoStyle>
  );
}
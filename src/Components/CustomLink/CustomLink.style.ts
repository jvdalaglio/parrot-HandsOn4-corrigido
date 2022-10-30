import styled from "styled-components";
import {Link} from "react-router-dom"
import { ReactNode } from "react";

type CustomLinkProps = {
  fontSize?: number;
  color?:string;
  marginTop?: number;
  children?: ReactNode;
}

export const CustomLink = styled(Link)<CustomLinkProps>`
  font-weight: 400;
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  text-decoration: none;
  margin-top: ${(props) => props.marginTop}px;
`
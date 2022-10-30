import styled from "styled-components";

export const NavStyle = styled.nav `
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
  padding: 10px;

  .hello {
    margin-right: 10px;
    text-align: center;

    @media only screen and (min-width: 600px) { 
      margin-right: 50px;
    }
  }

  strong{
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 25px;
  color: #76BB4C;
  border-right: solid 2px;
  padding-right: 3px;
  }
`
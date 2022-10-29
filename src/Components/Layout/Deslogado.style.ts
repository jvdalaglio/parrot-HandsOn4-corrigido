import styled from "styled-components";

export const DeslogadoStyle = styled.div`

  width: 100%;
  height: 100vh;
  background-image:url(/public/BACKGROUND.svg);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Questrial';
`

export const Card = styled.div`
  width: 370px;
  height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;


  background: #FFFFFF;
  border: 1px solid #C5C5C5;

  img{
    margin-bottom: 30px;
  }

  @media only screen and (min-width: 600px) {
    width: 487px;
    height: 642px;
  }

  h1{

    font-family: 'Questrial';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    margin-bottom:14px;


    color: #000000;
  }
`
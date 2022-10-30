import styled from "styled-components";

export const BoxLayout = styled.section`

`

export const Profile = styled.img`
width: 70px;
height: 70px;
margin-top: 30px;

background: url("");
border: 1px solid #000000;
border-radius: 57.5px;

@media only screen and (min-width: 600px) {
   margin: 0;
}
`

export const UserBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 183px;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #C5C5C5;
  margin: 0;
  padding-left: 26px;

  .profile-index{
    display: flexbox;
    align-items: flex-end;
    justify-content: center;
  }

  .profile-info { 
    flex-direction: column;
    text-align: start;
    padding-left: 20px;
  }

  strong {
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;


    color: #76BB4C;
  }

  .info{
    margin: 0;
  }
`

export const FeedBox = styled.div`
width: 100%;
height: 758px;
left: 385px;
top: 266px;

background: #FFFFFF;
border: 1px solid #C5C5C5;
`
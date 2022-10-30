import { Button } from "../Button/Button";
import { NavBar } from "../NavBar/NavBar";
import { BoxLayout, Profile, UserBox, FeedBox } from "./Logado.style";


export function Logado () {
  return (
    <>
    <NavBar />
    <BoxLayout className="col-10 offset-1 col-lg-8 offset-lg-2 col-xxl-6 offset-xxl-3">
      <UserBox>
        <section className="profile-index row">
        <div className="col-3 col-lg-2 col-xxl-2">
          <Profile>
          </Profile>
        </div>
        <div className="profile-info col-9 col-lg-4 col-xxl-6">
          <strong>Nome Sobrenome</strong>
          <p className="info">apê 82</p>
          <p className="info">user@mail.com</p>
          <p></p>
        </div>
        <div className="col-10 offset-1 col-lg-3 col-xxl-2 offset-lg-1">
        <Button type="button" className={"userbutton"}>editar perfil</Button>
        </div>
        </section>
      </UserBox>
      <FeedBox>
        
      </FeedBox>
    </BoxLayout>
    </>
  )
}
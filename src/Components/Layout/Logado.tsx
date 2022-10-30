import { NavBar } from "../NavBar/NavBar";
import { BoxLayout, Profile, UserBox, FeedBox } from "./Logado.style";


export function Logado () {
  return (
    <>
    <NavBar />
    <BoxLayout className="col-10 offset-1 col-lg-8 offset-lg-2 col-xxl-6 offset-xxl-3">
      <UserBox>
        <Profile>

        </Profile>
      </UserBox>
      <FeedBox>
        
      </FeedBox>
    </BoxLayout>
    </>
  )
}
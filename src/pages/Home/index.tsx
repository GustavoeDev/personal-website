import { ArrowDownRight, Globe } from "phosphor-react";
import { Header } from "../../components/Header";
import {
  HomeBannerContainer,
  Location,
  NameInfinite,
  PersonalInfosContainer,
  Profession,
} from "./styles";
import { NavigationScroll } from "../../components/NavigationScroll";

export function Home() {
  return (
    <>
      <NavigationScroll />
      <HomeBannerContainer>
        <Header />
        <PersonalInfosContainer>
          <Location>
            <div className="infoLocation">
              <p>Pau dos Ferros</p>
              <span>Rio Grande do Norte</span>
            </div>
            <span className="iconGlobe">
              <Globe size={32} />
            </span>
          </Location>
          <Profession>
            <ArrowDownRight size={32} />
            <div className="infoProfession">
              <span>Desenvolvedor</span>
              <p>FrontEnd Júnior</p>
            </div>
          </Profession>
        </PersonalInfosContainer>
        <NameInfinite>
          <div className="slide">
            <span>Gustavo Emanuel -</span>
            <span>Gustavo Emanuel -</span>
          </div>
        </NameInfinite>
      </HomeBannerContainer>
      <div style={{ height: "100vh" }}>oi</div>
    </>
  );
}

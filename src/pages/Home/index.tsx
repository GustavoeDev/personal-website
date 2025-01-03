import { ArrowDownRight, Globe } from "phosphor-react";
import { Header } from "../../components/Header";
import {
  HomeBannerContainer,
  Location,
  NameInfinite,
  PersonalInfosContainer,
  Profession,
} from "./styles";

export function Home() {
  return (
    <>
      <HomeBannerContainer>
        <Header />
        <PersonalInfosContainer>
          <Location>
            <div className="info-location">
              <p>Pau dos Ferros</p>
              <span>Rio Grande do Norte</span>
            </div>
            <span className="icon-globe">
              <Globe size={32} />
            </span>
          </Location>
          <Profession>
            <ArrowDownRight size={32} />
            <div className="info-profession">
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
    </>
  );
}

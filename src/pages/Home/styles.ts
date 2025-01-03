import styled from "styled-components";

export const HomeBannerContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme["gray-500"]};
  background-image: url("src/assets/photo-gustavo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PersonalInfosContainer = styled.div`
  position: absolute;
  top: 25%;
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Location = styled.div`
  background-color: ${(props) => props.theme["dark-500"]};
  color: ${(props) => props.theme["white"]};
  padding: 1rem 1rem 1rem 2rem;
  border-radius: 0 9999px 9999px 0;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  .info-location {
    font-size: 0.875rem;
    font-family: "Poppins", sans-serif;
  }

  .icon-globe {
    background-color: ${(props) => props.theme["gray-500"]};
    padding: 0.75rem;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Profession = styled.div`
  color: ${(props) => props.theme["white"]};
  margin-right: 7rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  .info-profession {
    font-size: 2rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }
`;

export const NameInfinite = styled.div`
  overflow: hidden;
  white-space: nowrap;

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .slide {
    display: inline-block;
    font-size: 13rem;
    color: ${(props) => props.theme["white"]};
    animation: slide 14s linear infinite;

    span {
      margin-right: 3rem;
      text-shadow: 1px 1px 30px rgba(0, 0, 0, 0.4);
    }
  }
`;

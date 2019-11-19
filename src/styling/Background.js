import styled from "styled-components";
import Background from "../images/background.jpg";

const BackgroundCont = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 2;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.91) 87.36%
    );
  }
`;

export default BackgroundCont;

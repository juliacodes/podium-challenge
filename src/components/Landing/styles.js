import styled from "styled-components";
import Shakespeare from "../../images/shakespeare.jpg";
import { QUERIES } from "../../styling";

export const Container = styled.div`
  height: 100vh;
  max-width: 1600px;
  width: 90%;
  display: flex;
  margin: 20px;
  align-items: center;
  flex-wrap: wrap;

  @media (${QUERIES.medium}) {
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 0 auto;
  }
`;

export const FlexLeft = styled.div`
  display: flex;
  width: 100%;
  height: 40vh;

  @media (${QUERIES.medium}) {
    width: 30%;
    height: 100%;
  }
`;

export const FlexRight = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (${QUERIES.medium}) {
    width: 60%;
  }
`;

export const MainImage = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${Shakespeare});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 3;

  @media (${QUERIES.medium}) {
    background-size: contain;
  }
`;

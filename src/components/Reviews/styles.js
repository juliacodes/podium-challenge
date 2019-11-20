import styled from "styled-components";
import { QUERIES } from "../../styling";

export const ReviewsCont = styled.div`
  z-index: 3;
  max-width: 1600px;
  margin: 0 auto 100px auto;
  text-align: center;
`;

export const ReviewCardWrap = styled.div`
  display: flex;
  width: 90%;
  margin: 30px auto;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (${QUERIES.medium}) {
    width: 50%;
  }
`;

export const ReviewCardWrapSpotlight = styled.div`
  display: flex;
  max-width: 320px;
  margin: 90px auto;
  flex-wrap: nowrap;
  transition: transform 0.3s;

  .active {
    transform: scale(1);
    transition-duration: 0.3s;
    opacity: 1;

    @media (${QUERIES.medium}) {
      transform: scale(1.2);
    }
  }
`;

export const ButtonCont = styled.div`
  margin: 0 auto;
`;

export const Button = styled.button`
  width: 100px;
  padding: 10px 0;
  background-color: transparent;
  color: white;
  font-weight: 700;
  border: 2px solid white;
  border-style: none none solid none;
  margin: 10px;
  outline: none;
`;

export const SeeAll = styled(Button)`
  width: unset;
  color: black;
  border-color: black;
`;

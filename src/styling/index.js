import styled from "styled-components";

export const QUERIES = {
  medium: `min-width: 1092px`,
  small: `min-width: 552px`
};

export const Heading = styled.h1`
  font-size: 46px;
  margin: 20px 0;

  @media (${QUERIES.medium}) {
    font-size: 90px;
  }
`;

export const Paragraph = styled.p`
  font-size: 15px;
  line-height: 200%;
  color: white;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-x: hidden;
`;

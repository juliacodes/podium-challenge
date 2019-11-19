import styled from "styled-components";
import { Paragraph } from "../../styling";
import { QUERIES } from "../../styling";

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  width: 100%;
  margin: 10px 0;
  padding: 15px;

  @media (${QUERIES.medium}) {
    width: 45%;
  }
`;

export const Name = styled(Paragraph)`
  font-weight: bold;
  color: black;
  font-size: 20px;
`;
export const Date = styled(Paragraph)`
  color: gray;
  font-size: 15px;
  margin-bottom: 20px;
`;
export const Body = styled(Paragraph)`
  color: black;
`;

import styled from "styled-components";

const StarCont = styled.div`
  width: 80px;
  margin: 0 0 20px 0;

  position: relative;
  display: inline-block;
  color: transparent;
  text-align: left;

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "★★★★★";
    color: lightgray;
  }
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => (props.width ? props.width : "auto")};
    content: "★★★★★";
    color: gold;
    overflow: hidden;
  }
`;

export default StarCont;

import React from "react";
import StarCont from "./styles";

// starWidth is set by the rating value * 20
const Star = props => <StarCont width={`${props.starWidth * 20}%`}></StarCont>;

export default Star;

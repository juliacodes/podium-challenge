import React from "react";
import { Card } from "./styles";
import { Name, Date, Body } from "../ReviewCard/styles";
import Moment from "react-moment";
import Star from "../Star";

const ReviewCardSpotlight = props => (
  <Card onClick={() => props.onClick(props.key)} className={props.naming}>
    <Star starWidth={props.rating} />
    <Name>{props.author}</Name>
    <Date>
      <Moment format="MMMM Do YYYY">{props.publish_date}</Moment>
    </Date>
    <Body>{props.body}</Body>
  </Card>
);

export default ReviewCardSpotlight;

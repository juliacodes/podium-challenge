import React from "react";
import { Card } from "./styles";
import { Name, Date, Body } from "../ReviewCard/styles";
import Moment from "react-moment";
import Star from "../Star";

const ReviewCardSpotlight = props => (
  <Card id={props.id} className={props.naming} key={props.id}>
    <Star starWidth={props.rating} />
    <Name>{props.author}</Name>
    <Date>
      <Moment format="MMMM YYYY">{props.publish_date}</Moment>
    </Date>
    <Body>{props.body}</Body>
  </Card>
);

export default ReviewCardSpotlight;

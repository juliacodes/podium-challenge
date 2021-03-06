import React from "react";
import { Card, Name, Date, Body } from "./styles";
import Moment from "react-moment";
import Star from "../Star";

const ReviewCard = props => (
  <Card>
    <Star starWidth={props.rating} />
    <Name>{props.author}</Name>
    <Date>
      <Moment format="MMMM Do YYYY">{props.publish_date}</Moment>
    </Date>
    <Body>{props.body}</Body>
  </Card>
);

export default ReviewCard;

import React from "react";
import {
  ReviewsCont,
  ReviewCardWrap,
  ReviewCardWrapSpotlight,
  Button,
  ButtonCont,
  SeeAll
} from "./styles";
import { Card } from "../ReviewCardSpotlight/styles";
import { Heading } from "../../styling";
import ReviewCard from "../ReviewCard";
import ReviewCardSpotlight from "../ReviewCardSpotlight";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      listings: [],
      index: 5, //starting point -- halfway through
      seeAll: false
    };
  }

  componentDidMount() {
    fetch("https://shakespeare.podium.com/api/reviews", {
      method: "POST",
      headers: {
        "x-api-key": "H3TM28wjL8R4#HTnqk?c"
      }
    })
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          listings: responseData,
          active: responseData[this.state.index].id
        });
      })
      .catch(error => this.setState({ error }));
  }

  nextRev = () => {
    // when next button is pressed
    let newIndex = 0;
    this.state.index !== 10
      ? (newIndex = this.state.index + 1)
      : (newIndex = 0);
    const newActive = this.state.listings[newIndex].id;
    this.setState({
      index: newIndex,
      active: newActive
    });
  };

  prevRev = () => {
    // when previous button is pressed
    let newIndex = 0;
    this.state.index !== 0
      ? (newIndex = this.state.index - 1)
      : (newIndex = 10);
    const newActive = this.state.listings[newIndex].id;
    this.setState({
      index: newIndex,
      active: newActive
    });
  };

  seeAll = () => {
    this.setState({
      seeAll: true
    });
  };

  render() {
    const { listings, active, index, seeAll } = this.state;
    return (
      <ReviewsCont>
        <Heading>Reviews</Heading>
        <ReviewCardWrapSpotlight
          // index of object * total width / number of elements
          style={{
            transform: `translateX(-${index * (1250 / 10)}%)`
          }}
        >
          {listings.slice(0, 10).map(listings => {
            return (
              <ReviewCardSpotlight
                key={listings.id}
                naming={listings.id === active ? "active" : ""}
                {...listings}
              />
            );
          })}
          <Card className={index === 10 ? "active" : ""}>
            <SeeAll onClick={() => this.seeAll()}>View All Reviews</SeeAll>
          </Card>
        </ReviewCardWrapSpotlight>
        <ButtonCont>
          <Button onClick={() => this.prevRev()}>Previous</Button>
          <Button onClick={() => this.nextRev()}>Next</Button>
        </ButtonCont>
        {seeAll && ( // conditional render if seeAll is clicked
          <ReviewCardWrap>
            {listings.map(listings => {
              return <ReviewCard key={listings.id} {...listings} />;
            })}
          </ReviewCardWrap>
        )}
      </ReviewsCont>
    );
  }
}

export default Reviews;

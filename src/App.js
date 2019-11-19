import React from "react";
import Landing from "./components/Landing";
import Reviews from "./components/Reviews";
import { BodyContainer } from "./styling/index";
import BackgroundCont from "./styling/Background";

const App = () => (
  <BodyContainer>
    <BackgroundCont />
    <Landing />
    <Reviews />
  </BodyContainer>
);

export default App;

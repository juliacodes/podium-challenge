import React from "react";
import { Container, FlexLeft, FlexRight, MainImage } from "./styles";
import { Paragraph, Heading } from "../../styling";

const Landing = () => (
  <Container>
    <FlexLeft>
      <MainImage />
    </FlexLeft>
    <FlexRight>
      <Heading>William Shakespeare</Heading>
      <Paragraph>
        William Shakespeare was an English poet, playwright, and actor, widely
        regarded as the greatest writer in the English language and the world's
        greatest dramatist. He is often called England's national poet and the
        "Bard of Avon".
      </Paragraph>
    </FlexRight>
  </Container>
);

export default Landing;

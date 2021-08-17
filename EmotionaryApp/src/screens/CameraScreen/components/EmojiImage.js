import React from "react";
import styled from "styled-components";
import { images } from "../../../images";
const Container = styled.View`
  margin: 20px auto;
`;
const Emoji = styled.Image`
  width: 100px;
  height: 100px;
`;
const EmojiImage = () => {
  return (
    <Container>
      <Emoji source={images.emoji}></Emoji>
    </Container>
  );
};

export default EmojiImage;

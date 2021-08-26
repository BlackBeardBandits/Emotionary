import React from "react";
import styled from "styled-components";
import { images } from "../../../images";
const Container = styled.TouchableOpacity`
  margin: 20px auto;
`;
const Emoji = styled.Image`
  width: 100px;
  height: 100px;
`;
const EmojiImage = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <Emoji source={images.emoji}></Emoji>
    </Container>
  );
};

export default EmojiImage;

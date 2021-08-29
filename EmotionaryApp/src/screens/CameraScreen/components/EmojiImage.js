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
const EmojiImage = ({ onPress, emotion }) => {
  var image;
  switch (emotion) {
    case 0:
      image = images.happy;
      break;
    case 1:
      image = images.fear;
      break;
    case 2:
      image = images.angry;
      break;
    case 3:
      image = images.sad;
      break;
    case 4:
      image = images.confused;
      break;
    case 5:
      image = images.surprised;
      break;
    case 6:
      image = images.calm;
      break;
    case 7:
      image = images.disgusted;
      break;
    case 7:
      image = images.disgusted;
      break;
    case 8:
      image = images.question;
      break;
  }
  return (
    <Container onPress={onPress}>
      <Emoji source={image}></Emoji>
    </Container>
  );
};

export default EmojiImage;

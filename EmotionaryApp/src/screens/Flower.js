import React from "react";
import styled from "styled-components";
import { images } from "../images";
const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`;
const TextBox = styled.View`
  margin: 100px 30px 50px;
  align-self: flex-end;
`;
const StyledText = styled.Text`
  font-size: 25px;
  color: black;
  font-weight: 500;
`;
const ImageBox = styled.View`
  width: 90%;
  height: 500px;
  margin: 0 auto;
`;
const ImageContent = styled.Image`
  width: 80%;
  height: 500px;
  margin: 0 auto;
`;
const PercentBar = styled.View`
  width: 85%;
  height: 28px;
  border-radius: 15px;
  margin: 40px auto 50px;
  border: solid 2px;
`;

const PercentBarInside = styled.View`
  background-color: #7eaa55;
  width: ${({ days }) => days * 20}%;
  height: 24px;
  border-radius: 15px;
`;
export const Flower = () => {
  const days = 2;
  var image;
  switch (days) {
    case 2:
      image = images.rose2;
      break;
    case 3:
      image = images.rose3;
      break;
    case 4:
      image = images.rose4;
      break;
    case 5:
      image = images.rose5;
      break;
    default:
      image = images.rose1;
  }
  return (
    <Container>
      <TextBox>
        <StyledText>{days === 5 ? `개화` : `개화 ${5 - days}일전`}</StyledText>
      </TextBox>
      <ImageBox>
        <ImageContent source={image}></ImageContent>
      </ImageBox>
      <PercentBar>
        <PercentBarInside days={days}></PercentBarInside>
      </PercentBar>
    </Container>
  );
};

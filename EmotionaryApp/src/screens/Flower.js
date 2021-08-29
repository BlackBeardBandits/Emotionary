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
const ImageBox = styled.Image`
  width: 90%;
  height: 500px;
  margin: auto;
`;
const PercentBar = styled.View`
  background-color: #00b004;
  width: 85%;
  height: 28px;
  border-radius: 15px;
  margin: 40px auto 50px;
  border: solid 2px;
`;
export const Flower = () => {
  return (
    <Container>
      <TextBox>
        <StyledText>개화 3일전</StyledText>
      </TextBox>
      <ImageBox source={images.flower3}></ImageBox>
      <PercentBar />
    </Container>
  );
};

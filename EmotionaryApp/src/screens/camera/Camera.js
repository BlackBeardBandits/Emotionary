import React from "react";
import styled from "styled-components";
import { SelectImage, EmojiImage, Button } from "./components";
import smile from "../../images/smile.png";
const Container = styled.View`
  flex: 1;
  padding: 30px 20px;
`;
const TitleText = styled.Text`
  font-size: 25px;
  font-weight: 500;
  color: black;
`;

const AdviceText = styled.Text`
  font-size: 20px;
  padding: 0 80px;
  margin: 40px auto;
  text-align: center;
  font-weight: 600;
`;
const ButtonBox = styled.View`
  flex: 1;
  flex-direction: row;
  margin: auto;
`;
export const Camera = () => {
  return (
    <Container>
      <TitleText>감정분석 결과</TitleText>
      <SelectImage></SelectImage>
      <AdviceText>사람들에게 당신의 웃는 모습을 보여주세요.</AdviceText>
      <EmojiImage></EmojiImage>
      <ButtonBox>
        <Button title="달력에 기록"></Button>
        <Button title="다른 감정 선택"></Button>
      </ButtonBox>
    </Container>
  );
};

import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { images } from "../../../images";
const ResultEmotionTexts = [
  { emotion: "분노", percent: 0.1234 },
  { emotion: "경멸", percent: 0.1234 },
  { emotion: "싫음", percent: 0.1234 },
  { emotion: "무서움", percent: 0.1234 },
  { emotion: "행복", percent: 0.1234 },
  { emotion: "중립", percent: 0.1234 },
  { emotion: "비애", percent: 0.1234 },
  { emotion: "놀람", percent: 0.1234 },
];
const Container = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
`;
const Image = styled.Image`
  height: 220px;
  width: 160px;
`;
const ResultEmotion = styled.View`
  flex-direction: column;
  height: 220px;
  width: 160px;
`;
const ResultEmotionLine = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
`;
const ResultEmotionText = styled.Text`
  font-size: 20px;
  margin: auto;
  font-weight: 400;
`;
const SelectImage = () => {
  return (
    <Container>
      <Image source={images.photo}></Image>
      <ResultEmotion>
        {ResultEmotionTexts.map((text, idx) => {
          return (
            <ResultEmotionLine key={idx}>
              <ResultEmotionText>{text.emotion}</ResultEmotionText>
              <ResultEmotionText>{text.percent}</ResultEmotionText>
            </ResultEmotionLine>
          );
        })}
      </ResultEmotion>
    </Container>
  );
};

export default SelectImage;

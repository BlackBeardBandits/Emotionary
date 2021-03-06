import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.View`
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
  font-size: 18px;
  margin: auto;
  font-weight: 400;
`;
const ResultPercentText = styled.Text`
  font-size: 18px;
  margin: auto 10px;
  font-weight: 400;
`;
const ResultEmotion = (list) => {
  return (
    <Container>
      {list["list"].map((text, idx) => {
        return (
          <ResultEmotionLine key={idx}>
            <ResultEmotionText>{text["emotion"]}</ResultEmotionText>
            <ResultPercentText styled={{ margin: 20 }}>
              {text["percent"].substring(0, 7)}
            </ResultPercentText>
          </ResultEmotionLine>
        );
      })}
    </Container>
  );
};

export default ResultEmotion;

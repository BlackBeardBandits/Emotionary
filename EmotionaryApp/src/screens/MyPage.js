import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
  color: black;
`;

export const MyPage = () => {
  return (
    <Container>
      <StyledText>Mypage</StyledText>
    </Container>
  );
};

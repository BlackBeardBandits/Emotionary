import React from "react";
import styled from "styled-components";
import { Image } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ButtonArea = styled.View`
  width: 70%;
  height: 50px;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: black;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const LoginText = styled.Text`
  color: white;
`;

const AlertText = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Complete = (props) => {
  return (
    <Container>
      <Image
        source={require("../../../images/checked.png")}
        style={{ width: "30%", resizeMode: "contain" }}
      />
      <AlertText>회원가입이 완료되었습니다</AlertText>
      <ButtonArea>
        <LoginButton onPress={props.handleLoginPress}>
          <LoginText>로그인하기</LoginText>
        </LoginButton>
      </ButtonArea>
    </Container>
  );
};

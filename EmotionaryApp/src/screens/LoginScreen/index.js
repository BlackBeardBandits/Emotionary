import React from "react";
import styled from "styled-components";
import { TouchableOpacity, Text } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TitleArea = styled.View`
  width: 100%;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const FormArea = styled.View`
  width: 80%;
  height: 50px;
  border-radius: 25px;
  border-color: black;
  border-width: 1px;
  margin-bottom: 10px;
`;

const TextForm = styled.TextInput`
  width: 100%;
  height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
  color: white;
`;

const ButtonArea = styled.View`
  width: 80%;
  height: 5%;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: black;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const SignupButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LoginButtonText = styled.Text`
  color: white;
`;

export const LoginScreen = () => {
  return (
    <Container>
      <TitleArea>
        <Title>EMOTIONARY</Title>
      </TitleArea>
      <FormArea>
        <TextForm placeholder={"email"} />
      </FormArea>
      <FormArea>
        <TextForm placeholder={"password"} />
      </FormArea>
      <ButtonArea>
        <LoginButton>
          <LoginButtonText>로그인</LoginButtonText>
        </LoginButton>
        <SignupButton>
          <Text>회원가입</Text>
        </SignupButton>
      </ButtonArea>
    </Container>
  );
};

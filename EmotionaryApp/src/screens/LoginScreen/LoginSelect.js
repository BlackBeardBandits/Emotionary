import React from "react";
import { Text } from "react-native";
import { Logo } from "./components";
import styled from "styled-components";
import { GoogleLogin } from "./components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-radius: 25px;
  border: 1px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
const SkipButton = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const LoginSelect = ({ navigation }) => {
  return (
    <Container>
      <Logo />
      <Button onPress={() => navigation.navigate("Login")}>
        <Text>Emotionary 계정으로 로그인</Text>
      </Button>
      <GoogleLogin />
      <SkipButton onPress={() => navigation.replace("Navigation")}>
        <Text>SKIP</Text>
      </SkipButton>
    </Container>
  );
};

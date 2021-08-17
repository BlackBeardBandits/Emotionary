import React, { useState, createRef } from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { Logo } from "./components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
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
`;

const ButtonArea = styled.View`
  width: 80%;
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

const RegistButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LoginButtonText = styled.Text`
  color: white;
`;

const ErrorText = styled.Text`
  color: red;
  padding-bottom: 10px;
`;

export const Login = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [errorText, setErrorText] = useState("");

  const passwordInputRef = createRef();

  // async function setUseridStorage(stu_id) {
  //   await AsyncStorage.setItem("user_id", stu_id);
  //   console.log("Done.");
  // }

  const handleLoginPress = () => {
    if (!userId) {
      setErrorText("이메일을 입력해주세요");
      return;
    }
    if (!userPassword) {
      setErrorText("비밀번호를 입력해주세요");
      return;
    }
  };

  return (
    <Container>
      <Logo />

      <FormArea>
        <TextForm
          placeholder={"이메일"}
          onChangeText={(userId) => setUserId(userId)}
          autoCapitalize="none"
          onSubmitEditing={() =>
            passwordInputRef.current && passwordInputRef.current.focus()
          }
          keyboardType="email-address"
        />
      </FormArea>
      <FormArea>
        <TextForm
          placeholder={"비밀번호"}
          onChangeText={(userPassword) => setUserPassword(userPassword)}
          secureTextEntry={true}
          ref={passwordInputRef}
        />
      </FormArea>
      {errorText != "" ? <ErrorText> {errorText}</ErrorText> : null}
      <ButtonArea>
        <LoginButton>
          <LoginButtonText onPress={handleLoginPress}>로그인</LoginButtonText>
        </LoginButton>
        <RegistButton onPress={() => navigation.navigate("Regist")}>
          <Text>회원가입</Text>
        </RegistButton>
      </ButtonArea>
    </Container>
  );
};

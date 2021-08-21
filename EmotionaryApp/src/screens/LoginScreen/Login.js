import React, { useState, createRef } from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { Logo } from "./components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

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
  const { preURL } = require("../../../preURL/preURL");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [errorText, setErrorText] = useState("");

  const passwordInputRef = createRef();

  async function setUseridStorage(stu_id) {
    await AsyncStorage.setItem("user_id", stu_id);
    console.log("Done.");
  }

  const handleLoginPress = () => {
    setErrorText("");
    if (!email) {
      setErrorText("이메일을 입력해주세요");
      return;
    }
    if (!password) {
      setErrorText("비밀번호를 입력해주세요");
      return;
    }

    axios
      .post(preURL + "/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.status.toString);
        if (res.status === 200) {
          console.log(res.data);
          AsyncStorage.setItem("id", res.data.id);
          navigation.replace("Navigation");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400)
          setErrorText("존재하지 않는 이메일 입니다.");
      });
  };

  return (
    <Container>
      <Logo />

      <FormArea>
        <TextForm
          placeholder={"이메일"}
          onChangeText={(email) => setEmail(email)}
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
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
          ref={passwordInputRef}
        />
      </FormArea>
      {errorText != "" ? <ErrorText> {errorText}</ErrorText> : null}
      <ButtonArea>
        <LoginButton onPress={handleLoginPress}>
          <LoginButtonText>로그인</LoginButtonText>
        </LoginButton>
        <RegistButton onPress={() => navigation.navigate("Regist")}>
          <Text>회원가입</Text>
        </RegistButton>
        <RegistButton onPress={() => navigation.replace("Navigation")}>
          <Text>넘어가기</Text>
        </RegistButton>
      </ButtonArea>
    </Container>
  );
};

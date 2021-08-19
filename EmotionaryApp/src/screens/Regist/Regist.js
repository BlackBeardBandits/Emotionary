import React, { useState, createRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { Complete, Loader } from "./components";

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
const RegistButton = styled.TouchableOpacity`
  background-color: black;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;
const RegistText = styled.Text`
  color: white;
`;
const FormContainer = styled.View`
  margin-bottom: 20px;
  width: 100%;
  align-items: center;
`;
const ErrorText = styled.Text`
  color: red;
  padding-bottom: 20px;
`;

export const Regist = ({ navigation }) => {
  const { preURL } = require("../../../preURL/preURL");

  const [errorText, setErrorText] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);

  const passwordInputRef = createRef();
  const passwordCheckInputRef = createRef();
  const nameInputRef = createRef();

  const handleRegistPress = () => {
    setErrorText("");

    if (!email || !password || !passwordCheck || !name) {
      setErrorText("모두 입력해주세요");
      return;
    }

    if (password !== passwordCheck) {
      setErrorText("비밀번호가 일치하지 않습니다");
      return;
    }

    setLoading(true);

    axios
      .post(preURL + "/api/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        setLoading(false);
        if (res.status == 200) {
          console.log(res.data);
          setIsRegisterSuccess(true);
        }
      })
      .catch((err) => {
        if (err.response.status === 400)
          setErrorText("이미 존재하는 이메일입니다");
      });
  };

  if (isRegisterSuccess) {
    return <Complete handleLoginPress={() => navigation.navigate("Login")} />;
  } else {
    return (
      <Container>
        <FormContainer>
          {/* <Loader loading={loading} /> */}
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
              ref={passwordInputRef}
              secureTextEntry={true}
              onSubmitEditing={() =>
                passwordCheckInputRef.current &&
                passwordCheckInputRef.current.focus()
              }
            />
          </FormArea>
          <FormArea>
            <TextForm
              placeholder={"비밀번호 확인"}
              onChangeText={(passwordCheck) => setPasswordCheck(passwordCheck)}
              ref={passwordCheckInputRef}
              secureTextEntry={true}
              onSubmitEditing={() =>
                nameInputRef.current && nameInputRef.current.focus()
              }
            />
          </FormArea>
        </FormContainer>
        <FormContainer>
          <FormArea>
            <TextForm
              placeholder={"닉네임"}
              onChangeText={(name) => setName(name)}
              ref={nameInputRef}
            />
          </FormArea>
        </FormContainer>
        {errorText != "" ? <ErrorText>{errorText}</ErrorText> : null}
        <ButtonArea>
          <RegistButton onPress={handleRegistPress}>
            <RegistText>회원가입</RegistText>
          </RegistButton>
        </ButtonArea>
      </Container>
    );
  }
};

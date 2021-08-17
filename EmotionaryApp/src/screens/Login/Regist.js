import React, { useState, createRef } from "react";
import styled from "styled-components";

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

export const Regist = () => {
  return (
    <Container>
      <FormContainer>
        <FormArea>
          <TextForm placeholder={"Please input email"} />
        </FormArea>
        <FormArea>
          <TextForm placeholder={"Please input password"} />
        </FormArea>
        <FormArea>
          <TextForm placeholder={"Confirm password"} />
        </FormArea>
      </FormContainer>
      <FormContainer>
        <FormArea>
          <TextForm placeholder={"Plase input nickname"} />
        </FormArea>
      </FormContainer>

      <ButtonArea>
        <RegistButton>
          <RegistText>회원가입</RegistText>
        </RegistButton>
      </ButtonArea>
    </Container>
  );
};

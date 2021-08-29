import React, { useState, useEffect } from "react";
import * as GoogleSignIn from "expo-google-sign-in";
import { Text } from "react-native";
import styled from "styled-components";

const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-radius: 25px;
  border: 1px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const GoogleLogin = () => {
  const [user, setUser] = useState(null);

  const _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    setUser(user);
  };

  const initAsync = async () => {
    await GoogleSignIn.initAsync({
      clientId:
        "686912910264-9326ec0g23a1d8sblpug3t56pe2uqc40.apps.googleusercontent.com",
    });
    _syncUserWithStateAsync();
  };

  useEffect(() => {
    initAsync();
    return () => {};
  }, []);

  const signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    setUser(null);
  };

  const signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === "success") {
        this._syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert("login: Error:" + message);
    }
  };

  const onPress = () => {
    if (user) signOutAsync();
    else signInAsync();
  };

  return (
    <Button onPress={onPress}>
      <Text>구글 계정으로 로그인</Text>
    </Button>
  );
};

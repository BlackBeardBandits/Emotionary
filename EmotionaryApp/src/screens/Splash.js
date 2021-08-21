import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem("id").then((value) =>
        navigation.replace(value === null ? "Auth" : "Navigation")
      );
    }, 1000); //3000
  }, []);

  return (
    <Container>
      <Image
        source={require("../images/emotionary.png")}
        style={{ width: "90%", resizeMode: "contain", margin: 30 }}
      />
    </Container>
  );
};

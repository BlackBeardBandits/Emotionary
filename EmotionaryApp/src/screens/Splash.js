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

const ActivityIndicate = styled.ActivityIndicator`
  align-items: center;
  height: 80px;
`;

export const Splash = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem("id").then((value) =>
        navigation.replace(value === null ? "Auth" : "TabNavigation")
      );
    }, 3000);
  }, []);

  return (
    <Container>
      <Image
        source={require("../images/emotionary.png")}
        style={{ width: "90%", resizeMode: "contain", margin: 30 }}
      />
      <ActivityIndicate animating={animating} color="black" size="large" />
    </Container>
  );
};

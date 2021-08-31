import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Profile, SettingMenu } from "./components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { images } from "../../images";

const Container = styled.View`
  flex: 1;
`;

export const MyPage = () => {
  const [name, setName] = useState("이름없음");
  const [avataURL, setAvataURL] = useState(images.unknown);

  useEffect(() => {
    AsyncStorage.getItem("name").then((value) => {
      if (value != null) setName(value);
    });
    AsyncStorage.getItem("avata").then((value) => {
      if (value != null) setAvataURL(value);
    });
  }, []);

  return (
    <Container>
      <Profile name={name} level="1" achievedGoal="12" avataURL={avataURL} />
      <SettingMenu />
    </Container>
  );
};

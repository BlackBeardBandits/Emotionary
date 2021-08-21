import React from "react";
import { Image } from "react-native";
import styled from "styled-components";

const TitleArea = styled.View`
  width: 100%;
  align-items: center;
`;

export const Logo = () => {
  return (
    <TitleArea>
      <Image
        source={require("../../../images/emotionary.png")}
        style={{ width: "80%", resizeMode: "contain" }}
      />
    </TitleArea>
  );
};

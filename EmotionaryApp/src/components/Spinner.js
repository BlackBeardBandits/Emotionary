import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  position: absolute;
  z-index: 2;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: #000000;
`;

const Spinner = () => {
  return (
    <Container>
      <ActivityIndicator size={"large"} color={"#ffffff"} />
    </Container>
  );
};

export default Spinner;

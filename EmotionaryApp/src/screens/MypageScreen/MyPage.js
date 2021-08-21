import React from "react";
import styled from "styled-components";
import { Profile, SettingMenu } from "./components";

const Container = styled.View`
  flex: 1;
`;

export const MyPage = () => {
  return (
    <Container>
      <Profile name="전병민" level="3" achievedGoal="13" avataURL="" />
      <SettingMenu />
    </Container>
  );
};

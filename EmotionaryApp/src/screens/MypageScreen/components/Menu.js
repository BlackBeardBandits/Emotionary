import React from "react";
import styled from "styled-components";

const MenuBlock = styled.View`
  width: 100%;
  margin-bottom: 10px;
  justify-content: center;
  background-color: white;
`;

const Menu = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  padding-left: 8%;
  justify-content: center;
  border-bottom-width: 0.2px;
  border-color: #ccc;
`;

const StyledText = styled.Text`
  font-size: 18px;
  color: black;
`;

export const SettingMenu = () => {
  return (
    <>
      <MenuBlock>
        <Menu>
          <StyledText>🏅 달성 목표</StyledText>
        </Menu>
        <Menu>
          <StyledText>🔓 로그아웃</StyledText>
        </Menu>
      </MenuBlock>
      <MenuBlock>
        <Menu>
          <StyledText>공지사항</StyledText>
        </Menu>
        <Menu>
          <StyledText>고객센터</StyledText>
        </Menu>
        <Menu>
          <StyledText>리뷰 남기기</StyledText>
        </Menu>
      </MenuBlock>
    </>
  );
};

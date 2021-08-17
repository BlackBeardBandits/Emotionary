import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
`;

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

const ProfileCard = styled.View`
  width: 100%;
  height: 30%;
  padding: 30px;
  background-color: white;
  padding-top: 70px;
  margin-bottom: 10px;
  justify-content: center;
`;

const ProfileName = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: black;
`;

const ProfileDescription = styled.Text`
  font-size: 15px;
  color: gray;
  margin-top: 5px;
`;

const Avata = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;

const ProfileContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  margin-right: 20px;
`;

const ProfileGrid = styled.View``;

export const MyPage = () => {
  return (
    <Container>
      <ProfileCard>
        <ProfileContainer>
          <ProfileGrid>
            <ProfileName>전병민</ProfileName>
            <ProfileDescription>Lv.2</ProfileDescription>
            <ProfileDescription>달성한 목표 13개</ProfileDescription>
          </ProfileGrid>
          <ProfileGrid>
            <Avata source={require("../../images/Unknown_person.jpg")}></Avata>
          </ProfileGrid>
        </ProfileContainer>
      </ProfileCard>

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
    </Container>
  );
};

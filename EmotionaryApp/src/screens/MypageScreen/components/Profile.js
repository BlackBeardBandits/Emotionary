import React from "react";
import styled from "styled-components";

const ProfileName = styled.Text`
  font-size: 30px;
  font-weight: bold;
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

export const Profile = ({ name, level, achievedGoal, avataURL }) => {
  return (
    <ProfileCard>
      <ProfileContainer>
        <ProfileGrid>
          <ProfileName>{name}</ProfileName>
          <ProfileDescription>Lv. {level}</ProfileDescription>
          <ProfileDescription>달성한 목표 {achievedGoal}개</ProfileDescription>
        </ProfileGrid>
        <ProfileGrid>
          <Avata source={require("../../../images/Unknown_person.jpg")}></Avata>
        </ProfileGrid>
      </ProfileContainer>
    </ProfileCard>
  );
};

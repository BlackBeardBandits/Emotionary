import React from "react";
import styled from "styled-components";
import { Modal } from "react-native";

const ModalBackground = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background-color: #00000040;
  flex-direction: column;
`;

const ActivityIndicatorWrapper = styled.View`
  background-color: #ffffff;
  height: 100px;
  width: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Loading = styled.ActivityIndicator`
  align-items: center;
  height: 80px;
`;

export const Loader = (props) => {
  const { loading, ...attribute } = props;

  return (
    <Modal transparent={true} animationType={none} visible={loading}>
      <ModalBackground>
        <ActivityIndicatorWrapper>
          <Loading animating={true} color="#000000" size="large" />
        </ActivityIndicatorWrapper>
      </ModalBackground>
    </Modal>
  );
};

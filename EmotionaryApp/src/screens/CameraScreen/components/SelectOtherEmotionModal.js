import React from "react";
import styled from "styled-components";
import Modal from "react-native-modal";
const Emotion = [
  "행복",
  "두려움",
  "화남",
  "슬픔",
  "당황",
  "놀람",
  "침착",
  "역겨움",
  "닫기",
];
const StyledModalContainer = styled.View`
  flex-direction: column;
  align-items: center;
  /* 모달창 크기 조절 */
  width: 100%;
  height: 60px;
  background-color: #e7e7e7;
  border-top-left-radius: ${({ idx }) => (idx === 0 ? 15 : 0)}px;
  border-top-right-radius: ${({ idx }) => (idx === 0 ? 15 : 0)}px;
  border-bottom-left-radius: ${({ idx }) => (idx === 8 ? 15 : 0)}px;
  border-bottom-right-radius: ${({ idx }) => (idx === 8 ? 15 : 0)}px;
`;
const StyledModalButton = styled.TouchableOpacity`
  /* Modal Button들의 모달창 내의 높이를 균일하게 하기 위하여 flex를 줌 */
  flex: 1;
  width: 100%;
  justify-content: center;
`;

const StyledModalText = styled.Text`
  align-self: center;
  color: black;
  font-size: 17px;
`;

const ModalButtonContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const HorizentalLine = styled.View`
  background-color: ${({ idx }) => (idx === 7 ? "#434343" : "#989898")};
  height: 1px;
  align-self: stretch;
`;
const SelectOtherEmotionModal = ({
  isVisibleOtherEmoiton,
  setIsVisibleOtherEmoiton,
}) => {
  return (
    <Modal
      isVisible={isVisibleOtherEmoiton}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      animationType={"fade"}
    >
      <ModalButtonContainer onPress={() => setIsVisibleOtherEmoiton(false)}>
        {Emotion.map((value, idx) => {
          return (
            <StyledModalContainer idx={idx} key={idx}>
              <StyledModalButton
                onPress={() => {
                  setIsVisibleOtherEmoiton(false);
                }}
              >
                <StyledModalText>{value}</StyledModalText>
              </StyledModalButton>
              <HorizentalLine idx={idx} />
            </StyledModalContainer>
          );
        })}
      </ModalButtonContainer>
    </Modal>
  );
};

export default SelectOtherEmotionModal;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as ImagePicker from "expo-image-picker";
import { Platform, Alert } from "react-native";
import Modal from "react-native-modal";
const Container = styled.View`
  height: 220px;
  width: 160px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;
const StyledModalContainer = styled.View`
  flex-direction: column;
  align-items: center;
  /* 모달창 크기 조절 */
  width: 100%;
  height: 60px;
  background-color: #e7e7e7;
  border-radius: 15px;
  margin: 3px;
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
const SelectImage = ({ url, onChangeImage }) => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        if (Platform.OS !== "ios") {
          const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== "granted") {
            Alert.alert(
              "Photo Permission",
              "Please turn on the camera roll permissions."
            );
          }
        }
      } catch (e) {
        Alert.alert("Photo Permission Error", e.message);
      }
    })();
  }, []);

  const _handleEditButton = async () => {
    setModalVisible(false);
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [8, 11],
        quality: 1,
      });

      if (!result.cancelled) {
        onChangeImage(result);
      }
    } catch (e) {
      Alert.alert("Photo Error", e.message);
    }
  };

  return (
    <Container>
      <Modal
        isVisible={modalVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        animationType={"fade"}
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <StyledModalContainer>
          <StyledModalButton onPress={_handleEditButton}>
            <StyledModalText>앨범에서 선택</StyledModalText>
          </StyledModalButton>
        </StyledModalContainer>

        <StyledModalContainer>
          <StyledModalButton
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <StyledModalText>사진 찍기</StyledModalText>
          </StyledModalButton>
        </StyledModalContainer>

        <StyledModalContainer>
          <StyledModalButton
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <StyledModalText>닫기</StyledModalText>
          </StyledModalButton>
        </StyledModalContainer>
      </Modal>
      <ButtonContainer onPress={() => setModalVisible(true)}>
        <Image source={url}></Image>
      </ButtonContainer>
    </Container>
  );
};

export default SelectImage;

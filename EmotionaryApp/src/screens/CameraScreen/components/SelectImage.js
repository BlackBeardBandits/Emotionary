import React, { useEffect } from "react";
import styled from "styled-components";
import * as ImagePicker from "expo-image-picker";
import { Platform, Alert } from "react-native";

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
const SelectImage = ({ url, onChangeImage }) => {
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
      <ButtonContainer onPress={_handleEditButton}>
        <Image source={url}></Image>
      </ButtonContainer>
    </Container>
  );
};

export default SelectImage;

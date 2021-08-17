import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { SelectImage, EmojiImage, Button, ResultEmotion } from "./components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { images } from "../../images";
import { handleFileInput } from "./AWS/UploadImageToAWS";
import { ProgressContext } from "../../contexts";
import { Alert } from "react-native";
import { Analyze } from "./AWS/Analyze";

const Container = styled.View`
  flex: 1;
  padding: 30px 20px;
`;
const TitleText = styled.Text`
  font-size: 25px;
  font-weight: 500;
  color: black;
`;

const AdviceText = styled.Text`
  font-size: 20px;
  padding: 0 80px;
  margin: 40px auto;
  text-align: center;
  font-weight: 600;
`;
const ButtonBox = styled.View`
  flex: 1;
  flex-direction: row;
  margin: auto;
`;
const SelectImageBox = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
`;
export const Camera = () => {
  const [photoUrl, setPhotoUrl] = useState(images.photo);
  const { spinner } = useContext(ProgressContext);
  const [list, setList] = useState([
    { emotion: "행복", percent: "0.0000" },
    { emotion: "두려움", percent: "0.0000" },
    { emotion: "화남", percent: "0.0000" },
    { emotion: "슬픔", percent: "0.0000" },
    { emotion: "당황", percent: "0.0000" },
    { emotion: "놀람", percent: "0.0000" },
    { emotion: "침착", percent: "0.0000" },
    { emotion: "역겨움", percent: "0.0000" },
  ]);
  const [newData, setNewData] = useState(0);
  const handleEmotionList = (data) => {
    var newList = [
      { emotion: "행복", percent: "0.0000" },
      { emotion: "두려움", percent: "0.0000" },
      { emotion: "화남", percent: "0.0000" },
      { emotion: "슬픔", percent: "0.0000" },
      { emotion: "당황", percent: "0.0000" },
      { emotion: "놀람", percent: "0.0000" },
      { emotion: "침착", percent: "0.0000" },
      { emotion: "역겨움", percent: "0.0000" },
    ];
    data.Emotions.map((e) => {
      switch (e.Type) {
        case "HAPPY":
          newList[0].percent = `${e.Confidence}`;
          break;
        case "FEAR":
          newList[1].percent = `${e.Confidence}`;
          break;
        case "ANGRY":
          newList[2].percent = `${e.Confidence}`;
          break;
        case "SAD":
          newList[3].percent = `${e.Confidence}`;
          break;
        case "CONFUSED":
          newList[4].percent = `${e.Confidence}`;
          break;
        case "SURPRISED":
          newList[5].percent = `${e.Confidence}`;
          break;
        case "CALM":
          newList[6].percent = `${e.Confidence}`;
          break;
        case "DISGUSTED":
          newList[7].percent = `${e.Confidence}`;
          break;
      }
    });
    setList(newList);
  };

  const _handleFileInput = async () => {
    try {
      spinner.start();
      await handleFileInput(photoUrl);
      await Analyze(photoUrl, setNewData);
    } catch (e) {
      Alert.alert("Error", e.message);
    }
  };
  useEffect(() => {
    if (photoUrl !== images.photo) {
      _handleFileInput();
    }
  }, [photoUrl]);
  useEffect(() => {
    if (newData != 0) {
      handleEmotionList(newData);
      Alert.alert("분석 완료");
      spinner.stop();
    }
  }, [newData]);

  return (
    <KeyboardAwareScrollView extraScrollHeight={20}>
      <Container>
        <TitleText>감정분석 결과</TitleText>
        <SelectImageBox>
          <SelectImage
            url={photoUrl}
            onChangeImage={(url) => setPhotoUrl(url)}
          ></SelectImage>
          <ResultEmotion list={list}></ResultEmotion>
        </SelectImageBox>
        <AdviceText>사람들에게 당신의 웃는 모습을 보여주세요.</AdviceText>
        <EmojiImage></EmojiImage>
        <ButtonBox>
          <Button
            title="달력에 기록"
            onPress={() => {
              spinner.start();
            }}
          ></Button>
          <Button title="다른 감정 선택"></Button>
        </ButtonBox>
      </Container>
    </KeyboardAwareScrollView>
  );
};

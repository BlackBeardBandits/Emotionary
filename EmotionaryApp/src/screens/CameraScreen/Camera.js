import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import {
  SelectImage,
  EmojiImage,
  Button,
  ResultEmotion,
  SelectOtherEmotionModal,
} from "./components";
import { images } from "../../images";
import { handleFileInput } from "./AWS/UploadImageToAWS";
import { ProgressContext } from "../../contexts";
import { Alert } from "react-native";
import { Analyze } from "./AWS/Analyze";
import { defaultEmotion } from "./defaultEmotion";

const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: white;
`;
const TitleText = styled.Text`
  font-size: 25px;
  font-weight: 500;
  color: black;
  margin-top: 70px;
`;

const AdviceText = styled.Text`
  font-size: 20px;
  padding: 30px 80px 10px 80px;
  width: 100%;
  margin: 40px auto;
  text-align: center;
  font-weight: 600;
`;
const ButtonBox = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 0px auto 50px;
`;
const SelectImageBox = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
`;
export const Camera = ({ navigation }) => {
  //FIXME
  const [photoUrl, setPhotoUrl] = useState(images.camera);
  const { spinner } = useContext(ProgressContext);
  const [list, setList] = useState(defaultEmotion);
  const [newData, setNewData] = useState(0);
  const [isVisibleOtherEmoiton, setIsVisibleOtherEmoiton] = useState(false);
  const [emotion, setEmotion] = useState(8); // 행복(0) 두려움 화남 슬픔 당황 놀람 침착 역겨움 ?(8)

  const handleEmotionList = (data) => {
    const newList = [
      { emotion: "행복", percent: "0.0000" },
      { emotion: "두려움", percent: "0.0000" },
      { emotion: "화남", percent: "0.0000" },
      { emotion: "슬픔", percent: "0.0000" },
      { emotion: "당황", percent: "0.0000" },
      { emotion: "놀람", percent: "0.0000" },
      { emotion: "침착", percent: "0.0000" },
      { emotion: "역겨움", percent: "0.0000" },
    ];
    var highestEmotion = 8;
    var highestPercent = 0;
    if (data !== "fail") {
      data.Emotions.map((e) => {
        switch (e.Type) {
          case "HAPPY":
            newList[0].percent = `${e.Confidence}`;
            if (highestPercent < newList[0].percent) {
              highestPercent = newList[0].percent;
              highestEmotion = 0;
            }
            break;
          case "FEAR":
            newList[1].percent = `${e.Confidence}`;
            if (highestPercent < newList[1].percent) {
              highestPercent = newList[1].percent;
              highestEmotion = 1;
            }
            break;
          case "ANGRY":
            newList[2].percent = `${e.Confidence}`;
            if (highestPercent < newList[2].percent) {
              highestPercent = newList[2].percent;
              highestEmotion = 2;
            }
            break;
          case "SAD":
            newList[3].percent = `${e.Confidence}`;
            if (highestPercent < newList[3].percent) {
              highestPercent = newList[3].percent;
              highestEmotion = 3;
            }
            break;
          case "CONFUSED":
            newList[4].percent = `${e.Confidence}`;
            if (highestPercent < newList[4].percent) {
              highestPercent = newList[4].percent;
              highestEmotion = 4;
            }
            break;
          case "SURPRISED":
            newList[5].percent = `${e.Confidence}`;
            if (highestPercent < newList[5].percent) {
              highestPercent = newList[5].percent;
              highestEmotion = 5;
            }
            break;
          case "CALM":
            newList[6].percent = `${e.Confidence}`;
            if (highestPercent < newList[6].percent) {
              highestPercent = newList[6].percent;
              highestEmotion = 6;
            }
            break;
          case "DISGUSTED":
            newList[7].percent = `${e.Confidence}`;
            if (highestPercent < newList[7].percent) {
              highestPercent = newList[7].percent;
              highestEmotion = 7;
            }
            break;
        }
      });
    }

    setList(newList);
    setEmotion(highestEmotion);
  };

  const _handleFileInput = async () => {
    try {
      spinner.start();
      await handleFileInput(photoUrl);
      await Analyze(photoUrl, setNewData);
    } catch (e) {
      Alert.alert("분석 실패");
      spinner.stop();
    }
  };
  useEffect(() => {
    if (photoUrl !== images.camera) {
      _handleFileInput();
    }
  }, [photoUrl]);

  useEffect(() => {
    if (newData != 0) {
      handleEmotionList(newData);
      if (newData === "fail") {
        Alert.alert("얼굴을 인식할 수 없습니다.");
      } else {
        Alert.alert("분석 완료");
      }
    }
    spinner.stop();
  }, [newData]);

  return (
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
      <EmojiImage
        onPress={() => setIsVisibleOtherEmoiton(true)}
        emotion={emotion}
      ></EmojiImage>
      <ButtonBox>
        <Button
          title="달력에 기록"
          onPress={() =>
            navigation.navigate("MyCalendar", { emotion: emotion })
          }
        ></Button>
        <Button
          title="다른 감정 선택"
          onPress={() => setIsVisibleOtherEmoiton(true)}
        ></Button>
        <SelectOtherEmotionModal
          isVisibleOtherEmoiton={isVisibleOtherEmoiton}
          setIsVisibleOtherEmoiton={setIsVisibleOtherEmoiton}
          setEmotion={setEmotion}
        />
      </ButtonBox>
    </Container>
  );
};

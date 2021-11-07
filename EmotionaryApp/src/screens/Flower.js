import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { images } from "../images";
import { AsyncStorage, JS } from "@aws-amplify/core";
const Container = styled.ScrollView`
    flex: 1;
    background-color: white;
`;
const TextBox = styled.View`
    margin: 100px 30px 50px;
    align-self: flex-end;
`;
const StyledText = styled.Text`
    font-size: 25px;
    color: black;
    font-weight: 500;
`;
const ImageBox = styled.View`
    width: 90%;
    height: 500px;
    margin: 0 auto;
`;
const ImageContent = styled.Image`
    width: 80%;
    height: 500px;
    margin: 0 auto;
`;
const PercentBar = styled.View`
    width: 85%;
    height: 28px;
    border-radius: 15px;
    margin: 40px auto 50px;
    border: solid 2px;
`;

const PercentBarInside = styled.View`
    background-color: #7eaa55;
    width: ${({ days }) => days * 20}%;
    height: 24px;
    border-radius: 15px;
`;
async function getUserInfo(days, setDays) {
    console.log(2);
    let userInfo = {};
    let count = 0;
    await AsyncStorage.getItem("userInfo", (err, result) => {
        if (result != null) {
            userInfo = JSON.parse(result);
        }
    });
    var currentDay = new Date();
    var theYear = currentDay.getFullYear();
    var theMonth = currentDay.getMonth();
    var theDate = currentDay.getDate();
    var theDayOfWeek = currentDay.getDay();

    var thisWeek = [];

    for (var i = 0; i < 7; i++) {
        var resultDay = new Date(
            theYear,
            theMonth,
            theDate + (i - theDayOfWeek)
        );
        var yyyy = resultDay.getFullYear();
        var mm = Number(resultDay.getMonth()) + 1;
        var dd = resultDay.getDate();

        mm = String(mm).length === 1 ? "0" + mm : mm;
        dd = String(dd).length === 1 ? "0" + dd : dd;

        thisWeek[i] = yyyy + "-" + mm + "-" + dd;
    }
    thisWeek.map((date) => {
        if (userInfo[date] != null) {
            count++;
        }
    });
    setDays(count);
}
const changeImage = (days) => {
    switch (days) {
        case 1:
            image = images.rose2;
            break;
        case 2:
            image = images.rose3;
            break;
        case 3:
            image = images.rose4;
            break;
        case 4:
            image = images.rose5;
            break;
        default:
            image = images.rose1;
    }
};
var image;
export const Flower = () => {
    let [days, setDays] = useState(0);
    setInterval(() => {
        getUserInfo(days, setDays);
    }, 2000);
    changeImage(days);
    useEffect(() => {
        changeImage(days);
    }, [days]);

    return (
        <Container>
            <TextBox>
                <StyledText>
                    {days === 5 ? `개화` : `개화 ${5 - days}일전`}
                </StyledText>
            </TextBox>
            <ImageBox>
                <ImageContent source={image}></ImageContent>
            </ImageBox>
            <PercentBar>
                <PercentBarInside days={days}></PercentBarInside>
            </PercentBar>
        </Container>
    );
};

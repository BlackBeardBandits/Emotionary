import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components";
import { Calendar, CalendarList } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import Arrow from "react-native-arrow";
import { Dimensions, Button } from "react-native";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { navItem } from "aws-amplify";
import { AsyncStorage, JS } from "@aws-amplify/core";

const chartWidth = Dimensions.get("window").width;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: white;
    padding-top: 40px;
`;
const StyledText = styled.Text`
    font-size: 30px;
    color: black;
`;
const EmotionList = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;
const EmotionBox = styled.View`
    height: 70px;
    width: 70px;
    align-items: center;
    margin: 10px 20px;
`;
const RoundColor = styled.View`
    background-color: ${({ color }) => color};
    border-radius: 50px;
    height: 60%;
    width: 60%;
`;
const Colortext = styled.Text`
    font-size: 15px;
    padding: 5px;
    font-weight: 500;
`;
LocaleConfig.locales["KO"] = {
    monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    monthNamesShort: [
        "Jan",
        "Feb",
        "Mars",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ],
    dayNames: [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
    ],
    dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
    today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = "KO";

export const MyCalendar = ({ route, navigation }) => {
    // var { sendEmo } = { sendEmo: 8 };
    // console.log(sendEmo);
    //
    var { sendEmo } = { sendEmo: 8 };
    if (route.params != null) {
        sendEmo = route.params.sendEmo;
    }
    var today = new Date().toISOString().slice(0, 10);
    const [markedDates, setMarkedDates] = useState({});
    let userInfo = { today: 8 };
    const colorList = [
        { emotion: "행복", color: "#9CFF8F" },
        { emotion: "두려움", color: "black" },
        { emotion: "화남", color: "#FF8B8B" },
        { emotion: "슬픔", color: "blue" },
        { emotion: "당황", color: "#897676" },
        { emotion: "놀람", color: "#D6D637" },
        { emotion: "침착", color: "#FFC28B" },
        { emotion: "역겨움", color: "gray" },
        { emotion: "공백", color: "#BDBDBD" },
    ];
    async function getUserInfo() {
        await AsyncStorage.getItem("userInfo", (err, result) => {
            if (result != null) {
                userInfo = JSON.parse(result);
            }
        });

        handleDayPress();
    }
    function handleDayPress() {
        let myDatas = {};
        for (let date in userInfo) {
            const val = userInfo[date];
            const selectedDate = {
                startingDay: true,
                endingDay: true,
                color: colorList[val].color,
                selected: true,
                marked: false,
            };
            myDatas[date] = selectedDate;
        }
        setMarkedDates(myDatas);
    }

    useEffect(() => {
        getUserInfo();
    }, []);
    useEffect(() => {
        getUserInfo();
    }, [sendEmo]);

    return (
        <Container>
            <CalendarList
                scrollEnabled={true}
                horizontal={true}
                pagingEnabled={true}
                markedDates={markedDates}
                theme={{
                    backgroundColor: "#ffffff",
                    calendarBackground: "#ffffff",
                    textSectionTitleColor: "blue",
                    textSectionTitleDisabledColor: "#d9e1e8",
                    selectedDayBackgroundColor: "#00adf5",
                    selectedDayTextColor: "#ffffff",
                    todayTextColor: "#00adf5",
                    dayTextColor: "#2d4150",
                    textDisabledColor: "#d9e1e8",
                    dotColor: "#00adf5",
                    selectedDotColor: "#ffffff",
                    arrowColor: "orange",
                    disabledArrowColor: "#d9e1e8",
                    monthTextColor: "blue",
                    indicatorColor: "blue",
                    textDayFontWeight: "300",
                    textMonthFontWeight: "bold",
                    textDayHeaderFontWeight: "300",
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16,

                    textDisabledColor: "gray",
                    calendarBackground: "white",
                    "stylesheet.day.period": {
                        base: {
                            overflow: "hidden",
                            height: 50,
                            alignItems: "center",
                            width: 50,
                        },
                    },
                    "stylesheet.calendar.header": {
                        week: {
                            marginTop: 0,
                            flexDirection: "row",
                            justifyContent: "space-between",
                        },
                    },
                    selectedDayTextColor: "white",
                }}
                renderArrow={(direction) => (
                    <Icon
                        name={
                            direction === "left"
                                ? "chevron-left"
                                : "chevron-right"
                        }
                        size={30}
                        color="black"
                    />
                )}
                hideArrows={false}
                markingType={"period"}
                minDate={"2010-01-01"}
                maxDate={"2070-12-31"}
                // onDayPress={(day) => handleDayPress(day)}
                onDayLongPress={(day) => {}}
                monthFormat={"MMMM yyyy"}
                onMonthChange={(month) => {}}
                hideExtraDays={false}
                firstDay={1}
                onPressArrowLeft={(substractMonth) => substractMonth()}
                onPressArrowRight={(addMonth) => addMonth()}
                style={{ width: chartWidth, height: "60%" }}
            />
            <EmotionList>
                {colorList.map((item, idx) => {
                    return (
                        <EmotionBox key={idx}>
                            <RoundColor color={item.color}></RoundColor>
                            <Colortext>{item.emotion}</Colortext>
                        </EmotionBox>
                    );
                })}
            </EmotionList>
            {/* <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      /> */}
        </Container>
    );
};

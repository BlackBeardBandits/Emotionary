import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components";
import { Calendar, CalendarList } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import Arrow from "react-native-arrow";
import { Dimensions } from "react-native";
import { Icon } from "react-native-elements";

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
export const MyCalendar = (props) => {
  const [markedDates, setMarkedDates] = useState({});
  const colorList = [
    { emotion: "행복", color: "#9CFF8F" },
    { emotion: "두려움", color: "black" },
    { emotion: "화남", color: "#FF8B8B" },
    { emotion: "슬픔", color: "blue" },
    { emotion: "당황", color: "#897676" },
    { emotion: "놀람", color: "#D6D637" },
    { emotion: "침착", color: "#FFC28B" },
    { emotion: "역겨움", color: "gray" },
  ];

  function handleDayPress(day) {
    const selectedDate = {
      startingDay: true,
      endingDay: true,
      color: colorList[2].color,
      selected: true,
      marked: false,
    };
    setMarkedDates({
      [day.dateString]: selectedDate,
    });
  }
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
            name={direction === "left" ? "chevron-left" : "chevron-right"}
            size={30}
            color="black"
          />
        )}
        hideArrows={false}
        markingType={"period"}
        minDate={"2010-01-01"}
        maxDate={"2070-12-31"}
        onDayPress={handleDayPress}
        onDayLongPress={(day) => {}}
        monthFormat={"MMMM yyyy"}
        onMonthChange={(month) => {}}
        hideExtraDays={false}
        firstDay={1}
        onPressArrowLeft={(substractMonth) => substractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        style={{ width: chartWidth, height: "80%" }}
      />
    </Container>
  );
};

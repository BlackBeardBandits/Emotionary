import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Flower } from "../screens/Flower";
import { Camera } from "../screens/CameraScreen/Camera";
import { MyCalendar } from "../screens/MyCalendar";
import { MyPage } from "../screens/MypageScreen/MyPage";
import { images } from "../images";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Camera"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let opacity = focused ? 1 : 0.3;
          if (route.name === "Camera") {
            iconName = images.gallery;
          } else if (route.name === "Flower") {
            iconName = images.plant;
          } else if (route.name === "MyCalendar") {
            iconName = images.calendar;
          } else if (route.name === "MyPage") {
            iconName = images.gear;
          }

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{ width: 35, height: 35, opacity: opacity }}
            />
          );
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Flower" component={Flower} />
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="MyCalendar" component={MyCalendar} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
};
export default TabNavigation;

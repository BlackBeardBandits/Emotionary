import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Flower } from "../screens/Flower";
import { Camera } from "../screens/CameraScreen/Camera";
import { Calendar } from "../screens/Calendar";
import { MyPage } from "../screens/Mypage/MyPage";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Camera"
      tabBarOptions={{
        inactiveTintColor: "#C1C1C1",
        activeTintColor: "#000000",
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Flower" component={Flower} />
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
};
export default TabNavigation;

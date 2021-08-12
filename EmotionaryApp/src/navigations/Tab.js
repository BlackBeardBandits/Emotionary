import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Flower } from "../screens/Flower";
import { Camera } from "../screens/camera/Camera";
import { Calendar } from "../screens/Calendar";
import { Mypage } from "../screens/Mypage";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Camera"
      tabBarOptions={{
        inactiveTintColor: "#C1C1C1",
        activeTintColor: "#000000",
      }}
    >
      <Tab.Screen name="Flower" component={Flower} />
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Mypage" component={Mypage} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

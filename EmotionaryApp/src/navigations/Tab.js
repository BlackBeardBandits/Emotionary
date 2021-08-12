import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Flower } from "../screens/Flower";
import { Camera } from "../screens/Camera";
import { Calendar } from "../screens/Calendar";
import { MyPage } from "../screens/MyPage";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Flower"
      tabBarOptions={{
        inactiveTintColor: "#C1C1C1",
        activeTintColor: "#000000",
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

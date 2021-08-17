import React from "react";
import TabNavigation from "./navigations/Tab";
import { Login } from "./screens/Login/Login";
import { Regist } from "./screens/Login/Regist";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Regist"
          component={Regist}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>

      {/* <TabNavigation /> */}
    </NavigationContainer>
  );
};

export default App;

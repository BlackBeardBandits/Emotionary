import React from "react";
import { Login } from "./screens/LoginScreen/Login";
import { Regist } from "./screens/RegistScreen/Regist";
import { Splash } from "./screens/Splash";

import AWS from "aws-sdk";
import Navigation from "./navigations";
import { ProgressProvider } from "./contexts";
import { key } from "../amplify/key";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Regist"
        component={Regist}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  AWS.config.update({
    accessKeyId: key.accessKeyId,
    secretAccessKey: key.secretAccessKey,
    region: key.region,
  });
  return (
    <NavigationContainer>
      <ProgressProvider>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Navigation"
            component={Navigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </ProgressProvider>
    </NavigationContainer>
  );
};

export default App;

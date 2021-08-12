import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigations/Tab";
import { LoginScreen } from "./screens/LoginScreen";

const App = () => {
  return (
    <>
      <LoginScreen />
      {/* <NavigationContainer>
        <TabNavigation />
      </NavigationContainer> */}
    </>
  );
};

export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigations/Tab";
import { LoginScreen } from "./screens/LoginScreen";
import { MyPage } from "./screens/MypageScreen/MyPage";

const App = () => {
  return (
    // <LoginScreen />
    // <MyPage />
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;

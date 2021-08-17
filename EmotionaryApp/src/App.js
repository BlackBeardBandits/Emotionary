import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigations";
import AWS from "aws-sdk";
import { ProgressProvider } from "./contexts";
import { key } from "../amplify/key";
const App = () => {
  AWS.config.update({
    accessKeyId: key.accessKeyId,
    secretAccessKey: key.secretAccessKey,
    region: key.region,
  });
  return (
    <NavigationContainer>
      <ProgressProvider>
        <Navigation />
      </ProgressProvider>
    </NavigationContainer>
  );
};

export default App;

import React, { useContext } from "react";
import TabNavigation from "./Tab";
import { Spinner } from "../components";
import { ProgressContext } from "../contexts";

const Navigation = () => {
  const { inProgress } = useContext(ProgressContext);
  return (
    <>
      <TabNavigation />
      {inProgress && <Spinner />}
    </>
  );
};

export default Navigation;

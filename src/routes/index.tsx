import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabRoutes from "./TabRoutes";

function Router() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}

export default Router;

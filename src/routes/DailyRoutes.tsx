import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import DailyList from "../screens/Daily/DailyList";
import SaveDaily from "../screens/Daily/SaveDaily";
import { IDaily } from "../types/Daily";

export type DailyStackParamList = {
  DailyList: undefined;
  SaveDaily: { daily?: IDaily };
};

export type dailyScreensProps = NativeStackNavigationProp<
  DailyStackParamList,
  "DailyList"
>;

const Stack = createNativeStackNavigator<DailyStackParamList>();

function DailyStackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DailyList" component={DailyList} />
      <Stack.Screen name="SaveDaily" component={SaveDaily} />
    </Stack.Navigator>
  );
}

export default DailyStackRoutes;

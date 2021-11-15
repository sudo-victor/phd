import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import DailyList from "../screens/Daily/DailyList";
import SaveDaily from "../screens/Daily/SaveDaily";
import SaleList from "../screens/Sales/SaleList";
import SaveSale from "../screens/Sales/SaveSale";
import SpentList from "../screens/Spents/SpentList";
import SaveSpent from "../screens/Spents/SaveSpent";
import { IDaily } from "../types/Daily";

export type DailyStackParamList = {
  DailyList: undefined;
  SaveDaily: { daily?: IDaily };
  SaleList: { daily?: IDaily };
  SaveSale: { daily?: IDaily };
  SpentList: { daily?: IDaily };
  SaveSpent: { daily?: IDaily };
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
      <Stack.Screen name="SaleList" component={SaleList} />
      <Stack.Screen name="SaveSale" component={SaveSale} />
      <Stack.Screen name="SpentList" component={SpentList} />
      <Stack.Screen name="SaveSpent" component={SaveSpent} />
    </Stack.Navigator>
  );
}

export default DailyStackRoutes;

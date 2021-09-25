import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import SellerList from "../screens/Sellers/SellerList";
import SaveSeller from "../screens/Sellers/SaveSeller";
import { Seller } from "../types/Seller";

export type SellerStackParamList = {
  SellerList: undefined;
  SaveSeller: { seller?: Seller };
};

export type sellerScreensProps = NativeStackNavigationProp<
  SellerStackParamList,
  "SellerList"
>;

const Stack = createNativeStackNavigator<SellerStackParamList>();

function SellerStackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SellerList" component={SellerList} />
      <Stack.Screen name="SaveSeller" component={SaveSeller} />
    </Stack.Navigator>
  );
}

export default SellerStackRoutes;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProductStackRoutes from "./ProductsRoutes";
import SellerStackRoutes from "./SellersRoutes";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Products" component={ProductStackRoutes} />
      <Tab.Screen name="Sellers" component={SellerStackRoutes} />
    </Tab.Navigator>
  );
};

export default TabRoutes;

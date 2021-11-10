import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import DailyStackRoutes from "./DailyRoutes";
import ProductStackRoutes from "./ProductsRoutes";
import SellerStackRoutes from "./SellersRoutes";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#7161EF",
        tabBarInactiveTintColor: "#7261ef7f",
        tabBarStyle: { paddingBottom: 5, paddingTop: 5 },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="clipboard-list" size={size} color={color} />
          ),
        }}
        name="Daily"
        component={DailyStackRoutes}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="archive" size={size} color={color} />
          ),
        }}
        name="Products"
        component={ProductStackRoutes}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="users" size={size} color={color} />
          ),
        }}
        name="Sellers"
        component={SellerStackRoutes}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;

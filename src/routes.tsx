import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import ProductList from "./screens/Products/ProductList";
import SaveProduct from "./screens/Products/SaveProduct";
import Product from "./types/Product";

export type RootStackParamList = {
  ProductList: undefined;
  SaveProduct: { product?: Product };
};

export type productScreensProps = NativeStackNavigationProp<
  RootStackParamList,
  "ProductList"
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="SaveProduct" component={SaveProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import Product from "../types/Product";
import SaveProduct from "../screens/Products/SaveProduct";
import ProductList from "../screens/Products/ProductList";

export type ProductStackParamList = {
  ProductList: undefined;
  SaveProduct: { product?: Product };
};

export type productScreensProps = NativeStackNavigationProp<
  ProductStackParamList,
  "ProductList"
>;

const Stack = createNativeStackNavigator<ProductStackParamList>();

function ProductStackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="SaveProduct" component={SaveProduct} />
    </Stack.Navigator>
  );
}

export default ProductStackRoutes;

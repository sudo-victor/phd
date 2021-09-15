import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import ProductList from './screens/Products/ProductList';
import AddProduct from './screens/Products/AddProduct';

export type RootStackParamList = {
  ProductList: undefined;
  AddProduct: undefined;
};

export type productScreensProps = NativeStackNavigationProp<
  RootStackParamList,
  'ProductList'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

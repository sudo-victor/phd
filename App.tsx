import React from "react";
import { LogBox } from "react-native";
import AppLoading from "expo-app-loading";
import {
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import Main from "./src/Main";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    ...FontAwesome.font,
    ...FontAwesome5.font,
    ...MaterialCommunityIcons.font,
    ...AntDesign.font,
    ...Ionicons.font,
    ...Feather.font,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Main />;
}

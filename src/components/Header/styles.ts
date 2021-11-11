import styled from "styled-components/native";
import Constants from "expo-constants";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: ${Constants.statusBarHeight + RFPercentage(12)}px;
  padding: 20px;
  padding-top: ${Constants.statusBarHeight + 20}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const Title = styled.Text`
  color: #fff;
  font-size: ${RFValue(19)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Button = styled.TouchableOpacity`
  width: 20px;
  height: 20px;

  align-items: center;
  justify-content: center;
`;

export const None = styled.View`
  width: 20px;
  height: 20px;

  align-items: center;
  justify-content: center;
`;

import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(60)}px;
  margin-bottom: 10px;
  padding: 15px;

  flex-direction: row;
  align-items: center;

  background-color: ${(props) => props.theme.colors.background};
  border-radius: 3px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.white};
`;

export const Text = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.gray};
`;

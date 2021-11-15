import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  margin-bottom: 10px;

  font-size: ${RFValue(16)}px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.label};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: ${RFValue(120)}px;
  padding: 10px;

  font-size: ${RFValue(18)}px;
  line-height: 21px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${(props) => props.theme.colors.gray};
  text-align-vertical: top;
  background: ${(props) => props.theme.colors.inputBackground};
  border-radius: 5px;
`;

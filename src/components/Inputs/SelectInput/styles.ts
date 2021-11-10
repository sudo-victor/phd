import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  margin-bottom: 10px;

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  line-height: 20px;
  color: ${(props) => props.theme.colors.label};
`;

export const InputWrapper = styled.View`
  width: 100%;
  height: 50px;
  padding: 10px;

  font-size: ${RFValue(18)}px;
  line-height: 21px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${(props) => props.theme.colors.gray};
  text-align: center;
  background: ${(props) => props.theme.colors.inputBackground};
  border-radius: 5px;
`;

export const Input = styled(Picker)`
  width: 100%;
  height: 100%;

  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.theme.colors.gray};
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

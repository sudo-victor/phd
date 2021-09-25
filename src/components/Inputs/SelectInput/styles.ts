import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  margin-bottom: 10px;

  font-size: 20px;
  line-height: 23px;
  color: ${(props) => props.theme.colors.label};
`;

export const InputWrapper = styled.View`
  background-color: #333;
  width: 100%;
  height: 55px;
  padding: 10px;

  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.theme.colors.gray};
  text-align: center;
  background: ${(props) => props.theme.colors.inputBackground};
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 8px;
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

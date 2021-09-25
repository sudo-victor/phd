import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

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

export const Input = styled(TextInputMask)`
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

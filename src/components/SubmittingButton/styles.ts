import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  width: 100%;
  height: 55px;
  margin-bottom: 40px;

  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.green};
  opacity: ${(props) => (props.enabled ? 1 : 0.6)};
  border-radius: 10px;
`;

export const Text = styled.Text`
  font-family: "Roboto";
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;

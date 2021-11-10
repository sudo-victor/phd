import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
  width: 100%;
  height: 55px;

  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.green};
  opacity: ${(props) => (props.enabled ? 1 : 0.6)};
  border-radius: 10px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  line-height: 21px;
  color: #ffffff;
`;

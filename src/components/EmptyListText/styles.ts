import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.label};
  font-size: ${RFValue(16)}px;
  line-height: 21px;
  font-family: ${({ theme }) => theme.fonts.light};
`;

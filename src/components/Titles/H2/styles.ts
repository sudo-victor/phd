import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Title = styled.Text`
  margin-bottom: 10px;

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${(props) => props.theme.colors.gray};
`;

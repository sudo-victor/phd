import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.background};
`;

export const Commission = styled.View`
  padding: 15px;
  margin-bottom: 10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
`;

export const SellerName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const SellerValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.green};
`;

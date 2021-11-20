import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const WrapperHorizontal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperVertical = styled.View`
  justify-content: space-between;
`;

export const FieldWrapper = styled.View`
  width: 48%;
`;

export const InfoContainer = styled.View`
  margin: 10px 0;
`;

export const Info = styled.View`
  width: 100%;
  padding: 0 3px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray};
`;

export const InfoValueWrapper = styled.View`
  width: ${RFPercentage(11)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoDollarSign = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray};
`;

export const InfoValue = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray};
`;

import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface TypeProps {
  type?: "sale" | "spent";
}

export const Container = styled.View<TypeProps>`
  width: 100%;
  padding: 16px;
  margin-right: 16px;

  justify-content: space-between;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Icon = styled(Feather)<TypeProps>`
  margin-right: 8px;
  font-size: ${RFValue(22)}px;
  color: ${({ theme, type }) =>
    type === "spent" ? theme.colors.red : theme.colors.green};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Value = styled.Text<TypeProps>`
  margin-bottom: 16px;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  color: ${({ theme, type }) =>
    type === "spent" ? theme.colors.red : theme.colors.green};
`;

export const CategoryContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CategoryName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const DoneAt = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.label};
`;

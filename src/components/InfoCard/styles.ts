import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface TypeProps {
  type: "money" | "card" | "spent" | "total";
}

export const Container = styled.View<TypeProps>`
  width: ${RFPercentage(45)}px;
  padding: 16px;
  margin-right: 16px;

  justify-content: space-between;

  background-color: ${({ theme, type }) =>
    type === "total" ? theme.colors.secondary : theme.colors.shape};
  border-radius: 5px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.gray};
`;

export const Icon = styled(MaterialCommunityIcons)<TypeProps>`
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.gray};
`;

export const Footer = styled.View``;

export const Value = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.gray};
`;

export const UpdatedAt = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(16)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.gray};
`;

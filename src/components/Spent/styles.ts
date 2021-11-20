import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface IconProps {
  type: "card" | "money";
}

export const ContainerActions = styled.View`
  flex-direction: row;
`;

export const ActionButton = styled(RectButton)`
  width: 33%;

  align-items: center;
  justify-content: center;
  border-radius: 3px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const DuplicateButton = styled(ActionButton)`
  background-color: ${(props) => props.theme.colors.blue};
`;

export const EditButton = styled(ActionButton)`
  background-color: ${(props) => props.theme.colors.yellow};
`;

export const DeleteButton = styled(ActionButton)`
  background-color: ${(props) => props.theme.colors.red};
`;

export const Container = styled.View`
  width: 100%;
  padding: 16px;

  justify-content: space-between;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  width: 100%;
  margin-bottom: 5px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
`;

export const Footer = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: flex-start;
`;

export const TypeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(MaterialCommunityIcons)<IconProps>`
  font-size: 18px;
  color: ${({ theme, type }) =>
    type === "money" ? theme.colors.green : theme.colors.secondary};
`;

export const Separator = styled.View`
  width: 3px;
  height: 3px;
  margin: 0px 5px;

  background-color: ${({ theme }) => theme.colors.label};
  border-radius: 3px;
`;

export const SaleBy = styled.Text`
  margin-top: 3px;
  color: ${({ theme }) => theme.colors.label};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const CreatedAt = styled.Text`
  margin-top: 3px;
  color: ${({ theme }) => theme.colors.label};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;

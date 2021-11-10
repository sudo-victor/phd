import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Date = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: 21px;
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
  color: ${(props) => props.theme.colors.gray};
`;

export const ButtonsContainer = styled.View`
  margin-top: 15px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Icon = styled(Feather)`
  margin-right: 5px;

  color: #555;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 100%;
  height: 65px;
  margin-top: 5px;

  flex-direction: row;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border-width: 1.5px;
  border-style: solid;
`;

export const SaleButton = styled(Button)`
  border-color: ${(props) => props.theme.colors.greenSecondary};
`;

export const SpentButton = styled(Button)`
  border-color: ${(props) => props.theme.colors.brown};
`;

export const ButtonText = styled.Text`
  line-height: 26px;
  color: #555;
  font-size: ${RFValue(18)}px;
  line-height: 21px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const BalanceContainer = styled.View``;

export const BalanceCard = styled.View``;

export const BalanceGroup = styled.View``;

export const BalanceGroupTitle = styled.Text``;

export const BalanceGroupValue = styled.Text``;

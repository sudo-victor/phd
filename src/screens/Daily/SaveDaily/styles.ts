import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Date = styled.Text`
  margin-bottom: 16px;

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${(props) => props.theme.colors.gray};
  line-height: 21px;
  text-align: center;
`;

export const InfoContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  height: ${RFValue(50)}px;
`;

export const ButtonsContainer = styled.View`
  margin-top: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Icon = styled(Feather)`
  margin-right: 5px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 48%;
  height: 65px;

  flex-direction: row;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: 1.5px solid #969cb2;
`;

export const SaleButton = styled(Button)``;

export const SpentButton = styled(Button)``;

export const ButtonText = styled.Text`
  line-height: 26px;
  color: #555;
  font-size: ${RFValue(18)}px;
  line-height: 21px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const CashFlow = styled.View`
  padding-top: 16px;
  flex: 1;
`;

export const CashFlowTitle = styled.Text`
  margin-bottom: 10px;

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${(props) => props.theme.colors.gray};
`;

export const CashFlowCards = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const CashFlowCardSeparator = styled.View`
  margin-bottom: 10px;
`;

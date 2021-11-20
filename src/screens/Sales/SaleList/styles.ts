import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
`;

export const CommissionContainer = styled.View`
  margin-bottom: 20px;
`;

export const SaleContainer = styled.View`
  flex: 1;
`;

export const ItemList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const SeparatorList = styled.View`
  margin-bottom: 10px;
`;

export const CommissionsButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  height: 50px;
  margin-bottom: 15px;

  border: 1px solid green;
  border-radius: 5px;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  background: transparent;
`;

export const CommissionsTitle = styled.Text`
  margin-right: 10px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(Feather)`
  margin-bottom: 4px;
`;

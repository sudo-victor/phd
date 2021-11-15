import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

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

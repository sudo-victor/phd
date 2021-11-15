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

import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex-grow: 1;
`;

export const Form = styled.View`
  justify-content: space-between;
  background: red;
`;

export const FieldsWrapper = styled.View``;

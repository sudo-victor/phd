import styled from "styled-components/native";

export const ContainerList = styled.FlatList`
  width: 100%;
  max-height: 200px;
`;

export const Form = styled.View`
  flex-grow: 1;
`;

export const CommissionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FieldWrapper = styled.View`
  width: 45%;
`;

export const ContainerItem = styled.View`
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  padding: 15px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.colors.background};
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.white};
`;

export const TextWrapper = styled.View`
  width: 70%;

  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.gray};
`;

export const DeleteBtn = styled.TouchableOpacity`
  width: 15%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const EmpytListText = styled.Text``;

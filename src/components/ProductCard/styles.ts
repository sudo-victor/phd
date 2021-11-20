import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 60px;
  margin-bottom: 10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.colors.background};
`;

export const TextWrapper = styled.View`
  height: 50px;
  margin-right: 15px;

  background-color: ${(props) => props.theme.colors.inputBackground};
  border-radius: 3px;

  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.gray};
`;

export const DeleteBtn = styled.TouchableOpacity`
  width: 30px;
  height: 30px;

  background-color: ${(props) => props.theme.colors.red};
  border-radius: 3px;

  align-items: center;
  justify-content: center;
`;

import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const ContainerActions = styled.View`
  flex-direction: row;
  padding-left: 10px;
`;

export const ActionButton = styled(RectButton)`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;

  align-items: center;
  justify-content: center;

  border-radius: 3px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const EditButton = styled(ActionButton)`
  background-color: ${(props) => props.theme.colors.yellow};
`;

export const DeleteButton = styled(ActionButton)`
  margin-left: 10px;
  background-color: ${(props) => props.theme.colors.red};
`;

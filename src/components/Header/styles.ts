import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  width: 100%;
  height: ${Constants.statusBarHeight + 70}px;
  padding: 20px;
  padding-top: ${Constants.statusBarHeight + 20}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  width: 35px;
  height: 35px;

  align-items: center;
  justify-content: center;
`;

export const None = styled.View`
  width: 35px;
  height: 35px;

  align-items: center;
  justify-content: center;
`;

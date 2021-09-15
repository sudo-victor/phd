import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';
import {RectButton} from 'react-native-gesture-handler';

export const Form = styled.ScrollView`
  flex-grow: 1;
`;

export const Field = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  margin-bottom: 10px;

  font-size: 20px;
  line-height: 23px;
  color: ${props => props.theme.colors.label};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 55px;
  padding: 10px;

  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${props => props.theme.colors.gray};
  text-align: center;
  background: ${props => props.theme.colors.inputBackground};
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const MoneyInput = styled(TextInputMask)`
  width: 100%;
  height: 55px;
  padding: 10px;

  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${props => props.theme.colors.gray};
  text-align: center;
  background: ${props => props.theme.colors.inputBackground};
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 55px;
  margin-bottom: 40px;

  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.green};
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;

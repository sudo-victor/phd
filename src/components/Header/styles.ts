import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 70px;
  padding: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.primary};
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

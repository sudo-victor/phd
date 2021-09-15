import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  padding: 15px;

  flex-direction: row;
  align-items: center;

  background-color: ${props => props.theme.colors.background};
  border-radius: 3px;
  border: 1px solid ${props => props.theme.colors.white};
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.gray};
`;

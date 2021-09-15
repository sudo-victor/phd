import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const Main = styled.View`
  flex: 1;

  padding: 40px 40px 0px 40px;
`;

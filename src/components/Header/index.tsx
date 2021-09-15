import React from 'react';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {Button, Container, None, Title} from './styles';

type HeaderProps = {
  title: string;
  hasPlus?: boolean;
  handlePlus?: () => any;
  hasGoBack?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  title,
  hasPlus,
  handlePlus,
  hasGoBack,
}) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      {hasGoBack ? (
        <Button onPress={goBack}>
          <AntIcon name="arrowleft" color="#fff" size={25} />
        </Button>
      ) : (
        <None />
      )}

      <Title>{title}</Title>

      {hasPlus ? (
        <Button onPress={handlePlus}>
          <FeatherIcon name="plus" color="#fff" size={25} />
        </Button>
      ) : (
        <None />
      )}
    </Container>
  );
};

export default Header;

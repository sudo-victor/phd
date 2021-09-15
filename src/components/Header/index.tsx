import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather, AntDesign } from "@expo/vector-icons";

import { Button, Container, None, Title } from "./styles";

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
          <AntDesign name="arrowleft" color="#fff" size={25} />
        </Button>
      ) : (
        <None />
      )}

      <Title>{title}</Title>

      {hasPlus ? (
        <Button onPress={handlePlus}>
          <Feather name="plus" color="#fff" size={25} />
        </Button>
      ) : (
        <None />
      )}
    </Container>
  );
};

export default Header;

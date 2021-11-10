import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Text } from "./styles";

type SubmittingButtonProps = RectButtonProps & {
  text: string;
};

const SubmittingButton: React.FC<SubmittingButtonProps> = ({
  text,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Text>{text}</Text>
    </Container>
  );
};

export default SubmittingButton;

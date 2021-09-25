import React from "react";

import { Container, Text } from "./styles";

type SubmittingButtonProps = {
  handleSubmit: () => void;
  isActive?: boolean;
  text: string;
};

const SubmittingButton: React.FC<SubmittingButtonProps> = ({
  handleSubmit,
  isActive = true,
  text,
}) => {
  return (
    <Container enabled={isActive} onPress={handleSubmit}>
      <Text>{text}</Text>
    </Container>
  );
};

export default SubmittingButton;

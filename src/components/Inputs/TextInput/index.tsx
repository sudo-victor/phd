import React from "react";
import { TextInputProps } from "react-native";

import { Container, Label, Input } from "./styles";

type Props = TextInputProps & {
  label: string;
};

const TextInput: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input {...rest} />
    </Container>
  );
};

export default TextInput;

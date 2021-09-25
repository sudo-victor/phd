import React from "react";

import { Container, Label, Input } from "./styles";

type TextInputProps = {
  handleSetValue: (value: string) => void;
  label: string;
  value: string;
};

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  handleSetValue,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input value={value} onChangeText={handleSetValue} />
    </Container>
  );
};

export default TextInput;

import React from "react";
import { TextInputProps } from "react-native";

import { Container, Label, Input } from "./styles";

type MoneyInputProps = TextInputProps & {
  label: string;
};

const MoneyInput: React.FC<MoneyInputProps> = ({ label, ...rest }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input type={"money"} {...rest} />
    </Container>
  );
};

export default MoneyInput;

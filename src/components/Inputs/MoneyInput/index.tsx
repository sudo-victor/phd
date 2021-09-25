import React from "react";

import { Container, Label, Input } from "./styles";

type MoneyInputProps = {
  handleSetValue: (value: number) => void;
  label: string;
  value: number;
};

const MoneyInput: React.FC<MoneyInputProps> = ({
  label,
  value,
  handleSetValue,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input type={"money"} value={value} onChangeText={handleSetValue} />
    </Container>
  );
};

export default MoneyInput;

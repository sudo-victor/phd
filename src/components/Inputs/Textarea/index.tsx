import React from "react";
import { TextInputProps } from "react-native";

import { Container, Label, Input } from "./styles";

type Props = TextInputProps & {
  label: string;
};

const Textarea: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input {...rest} multiline={true} />
    </Container>
  );
};

export default Textarea;

import React from "react";
import { Picker, PickerProps } from "@react-native-picker/picker";

import { Container, Label, Input, InputWrapper } from "./styles";
import { IOption } from "../../../types/Input";
import IProduct from "../../../types/Product";

type SelectInputProps = PickerProps & {
  label: string;
  valueGroup: IOption[] | IProduct[];
};

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  valueGroup,
  ...rest
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputWrapper>
        <Input {...rest}>
          {valueGroup.map((data, idx) => (
            <Picker.Item key={idx} label={data.name} value={data.id} />
          ))}
        </Input>
      </InputWrapper>
    </Container>
  );
};

export default SelectInput;

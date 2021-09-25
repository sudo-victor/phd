import React from "react";
import { Picker } from "@react-native-picker/picker";

import { Container, Label, Input, InputWrapper } from "./styles";
import { IOption } from "../../../types/Input";
import IProduct from "../../../types/Product";

type SelectInputProps = {
  handleSetValue: (_: any, id: number) => void;
  label: string;
  value: string | number;
  valueGroup: IOption[] | IProduct[];
};

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  value,
  valueGroup,
  handleSetValue,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputWrapper>
        <Input selectedValue={value} onValueChange={handleSetValue}>
          {valueGroup.map((data, idx) => (
            <Picker.Item key={idx} label={data.name} value={data.id} />
          ))}
        </Input>
      </InputWrapper>
    </Container>
  );
};

export default SelectInput;

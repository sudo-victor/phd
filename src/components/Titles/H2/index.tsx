import React from "react";
import { TextProps } from "react-native";

import { Title } from "./styles";

type Props = TextProps & {
  children: string;
};

const H2 = ({ children, ...rest }: Props) => {
  return <Title {...rest}>{children}</Title>;
};

export default H2;

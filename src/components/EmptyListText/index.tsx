import React from "react";
import { Text } from "./styles";

type EmptyListTextProps = {
  text: string;
};

const EmptyListText: React.FC<EmptyListTextProps> = ({ text }) => {
  return <Text>{text}</Text>;
};

export default EmptyListText;

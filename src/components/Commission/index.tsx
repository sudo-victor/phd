import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import { Container, DeleteBtn, Text, TextWrapper } from "./styles";

type ItemProps = {
  id: string;
  productName: string;
  commission: number;
};

type Props = {
  item: ItemProps;
  handleDeleteCommission: (id: string) => void;
};

const Commission = ({ item, handleDeleteCommission }: Props) => {
  return (
    <Container key={item.id}>
      <TextWrapper>
        <Text>{item.productName}</Text>
      </TextWrapper>

      <TextWrapper>
        <Text>{item.commission}</Text>
      </TextWrapper>

      <DeleteBtn onPress={() => handleDeleteCommission(item.id)}>
        <FontAwesome name="trash-o" size={22} color="#fff" />
      </DeleteBtn>
    </Container>
  );
};

export default Commission;

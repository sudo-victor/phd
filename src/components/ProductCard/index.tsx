import React from "react";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

import { Container, DeleteBtn, Text, TextWrapper } from "./styles";

import Reducers from "../../types/Reducers";
import { IProduct } from "../../types/Daily";

type Props = {
  item: IProduct;
  handleDeleteProduct: (id: number) => void;
};

const ProductCard = ({ item, handleDeleteProduct }: Props) => {
  const products = useSelector((state: Reducers) => state.product);

  function getProductName(id: number): string {
    return products.find((p) => p.id === id).name;
  }

  return (
    <Container key={item.id}>
      <TextWrapper>
        <Text>{getProductName(item.productId)}</Text>
      </TextWrapper>

      <TextWrapper>
        <Text>{item.amount}</Text>
      </TextWrapper>

      <DeleteBtn onPress={() => handleDeleteProduct(item.id)}>
        <FontAwesome name="trash-o" size={22} color="#fff" />
      </DeleteBtn>
    </Container>
  );
};

export default ProductCard;

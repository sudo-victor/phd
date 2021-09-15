import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import Layout from "../../../components/Layout";
import ListItem from "../../../components/ListItem";
import { ContainerList, EmpytListText } from "./styles";
import { productScreensProps } from "../../../routes";
import Product from "../../../types/Product";
import Reducers from "../../../types/Reducers";

const ProductList = () => {
  const navigation = useNavigation<productScreensProps>();
  const products = useSelector((state: Reducers) => state.product);

  const goToForm = () => {
    navigation.navigate("SaveProduct");
  };

  return (
    <Layout title="Lista de Produtos" hasPlus handlePlus={goToForm}>
      <ContainerList
        data={products}
        keyExtractor={(item: Product) => String(item.id)}
        ListEmptyComponent={() => (
          <EmpytListText>Nenhum Produto Cadastrado</EmpytListText>
        )}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </Layout>
  );
};

export default ProductList;

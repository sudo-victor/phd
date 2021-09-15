import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import Layout from "../../../components/Layout";
import ListItem from "../../../components/ListItem";
import { ContainerList, EmpytListText } from "./styles";
import { productScreensProps } from "../../../routes";
import Product from "../../../types/Product";

const ProductList = () => {
  const navigation = useNavigation<productScreensProps>();
  const [products, setProducts] = useState<Product[]>([]);

  const goToForm = () => {
    navigation.navigate("AddProduct");
  };

  return (
    <Layout title="Lista de Produtos" hasPlus handlePlus={goToForm}>
      <ContainerList
        data={products}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <EmpytListText>Nenhum Produto Cadastrado</EmpytListText>
        )}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </Layout>
  );
};

export default ProductList;

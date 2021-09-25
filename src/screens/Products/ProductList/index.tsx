import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import Layout from "../../../components/Layout";
import ListItem from "../../../components/ListItem";
import { ContainerList, EmpytListText } from "./styles";
import Product from "../../../types/Product";
import Reducers from "../../../types/Reducers";
import { productScreensProps } from "../../../routes/ProductsRoutes";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<productScreensProps>();
  const products = useSelector((state: Reducers) => state.product);

  const goToForm = () => {
    navigation.navigate("SaveProduct");
  };

  const goToEdit = (item) => {
    navigation.navigate("SaveProduct", { product: item });
  };

  const handleDeleteProduct = (item) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: { product: item },
    });
  };

  return (
    <Layout title="Lista de Produtos" hasPlus handlePlus={goToForm}>
      <ContainerList
        data={products}
        keyExtractor={(item: Product) => String(item.id)}
        ListEmptyComponent={() => (
          <EmpytListText>Nenhum Produto Cadastrado</EmpytListText>
        )}
        renderItem={({ item }) => (
          <ListItem
            handleDeleteItem={handleDeleteProduct}
            goToEdit={goToEdit}
            item={item}
          />
        )}
      />
    </Layout>
  );
};

export default ProductList;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import Layout from "../../../components/Layout";
import ListItem from "../../../components/ListItem";
import { ContainerList } from "./styles";
import IProduct from "../../../types/Product";
import Reducers from "../../../types/Reducers";
import { productScreensProps } from "../../../routes/ProductsRoutes";
import EmptyListText from "../../../components/EmptyListText";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<productScreensProps>();
  const products = useSelector((state: Reducers) => state.product);

  const goToForm = (item?) => {
    item
      ? navigation.navigate("SaveProduct", { product: item })
      : navigation.navigate("SaveProduct");
  };

  const handleDeleteProduct = (item) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: { product: item },
    });
  };

  return (
    <Layout title="Lista de Produtos" hasPlus handlePlus={() => goToForm()}>
      <ContainerList
        data={products}
        keyExtractor={(item: IProduct) => String(item.id)}
        ListEmptyComponent={() => (
          <EmptyListText text="Nenhum Produto Cadastrado" />
        )}
        renderItem={({ item }) => (
          <ListItem
            handleDeleteItem={handleDeleteProduct}
            goToEdit={goToForm}
            item={item}
          />
        )}
      />
    </Layout>
  );
};

export default ProductList;

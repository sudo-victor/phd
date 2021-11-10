import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Keyboard } from "react-native";

import Layout from "../../../components/Layout";
import TextInput from "../../../components/Inputs/TextInput";
import SubmittingButton from "../../../components/SubmittingButton";
import Product from "../../../types/Product";
import { Form, FieldsWrapper } from "./styles";
import { moneyTemplateToNumber } from "../../../helpers/dataFormatting";
import MoneyInput from "../../../components/Inputs/MoneyInput";
import { productScreensProps } from "../../../routes/ProductsRoutes";
import IProduct from "../../../types/Product";

const initialProduct = {
  name: "",
  entryPrice: 0,
  salePrice: 0,
};

const SaveProduct = ({ route }) => {
  const navigation = useNavigation<productScreensProps>();
  const dispatch = useDispatch();

  const [product, setProduct] = useState<Product>(initialProduct);

  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [productIsEnable, setProductIsEnable] = useState(false);

  useEffect(() => {
    function loadProductIfExists() {
      if (route.params) {
        setProduct(route.params.product);
      }
    }

    loadProductIfExists();
  }, []);

  useEffect(() => {
    setProductIsEnable(validateProduct());
    function activaButtonSubmitIfValidate() {}

    activaButtonSubmitIfValidate();
  }, [product]);

  const handleSubmit = (): void => {
    if (alreadySubmitted) return;
    setAlreadySubmitted(true);

    const newProduct: Product = getDataProduct();

    dispatch({
      type: product.id ? "UPDATE_PRODUCT" : "ADD_PRODUCT",
      payload: { product: newProduct },
    });

    navigation.goBack();

    Keyboard.dismiss();
    setProduct(initialProduct);
  };

  const validateProduct = (): boolean => {
    return !!(
      product.name !== "" &&
      moneyTemplateToNumber(String(product.entryPrice)) > 0 &&
      moneyTemplateToNumber(String(product.salePrice)) > 0
    );
  };

  const getDataProduct = (): IProduct => {
    return {
      id: product.id ? product.id : Math.random(),
      name: product.name,
      entryPrice: moneyTemplateToNumber(String(product.entryPrice)),
      salePrice: moneyTemplateToNumber(String(product.salePrice)),
    };
  };

  return (
    <Layout
      title={product.id ? "Editar Produto" : "Adicionar Produto"}
      hasGoBack
    >
      <Form
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      >
        <FieldsWrapper>
          <TextInput
            label="Nome"
            value={product.name}
            onChangeText={(value) => setProduct({ ...product, name: value })}
          />
          <MoneyInput
            label="Entrada"
            value={String(product.entryPrice)}
            onChangeText={(value) => {
              setProduct({
                ...product,
                entryPrice: Number(value.replace("R$", "")),
              });
            }}
          />
          <MoneyInput
            label="Preço de Venda"
            value={String(product.salePrice)}
            onChangeText={(value) =>
              setProduct({ ...product, salePrice: Number(value) })
            }
          />
        </FieldsWrapper>

        <SubmittingButton
          enabled={productIsEnable}
          onPress={handleSubmit}
          text="Salvar Produto"
        />
      </Form>
    </Layout>
  );
};

export default SaveProduct;

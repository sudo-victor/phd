import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Keyboard } from "react-native";

import Layout from "../../../components/Layout";
import TextInput from "../../../components/Inputs/TextInput";
import SubmittingButton from "../../../components/SubmittingButton";
import MoneyInput from "../../../components/Inputs/MoneyInput";
import Product from "../../../types/Product";
import IProduct from "../../../types/Product";
import {
  moneyTemplateToNumber,
  numberToMoneyTemplate,
} from "../../../helpers/dataFormatting";
import { productScreensProps } from "../../../routes/ProductsRoutes";
import { Form, FieldsWrapper } from "./styles";

const SaveProduct = ({ route }) => {
  const navigation = useNavigation<productScreensProps>();
  const dispatch = useDispatch();

  const [productId, setProductId] = useState(0);
  const [name, setName] = useState("");
  const [entryPrice, setEntryPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");

  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [productIsEnable, setProductIsEnable] = useState(false);

  useEffect(() => {
    function loadProductIfExists() {
      if (route.params) {
        const product = route.params.product;
        setProductId(product.id);
        setName(product.name);
        setEntryPrice(numberToMoneyTemplate(product.entryPrice));
        setSalePrice(numberToMoneyTemplate(product.salePrice));
      }
    }

    loadProductIfExists();
  }, []);

  useEffect(() => {
    setProductIsEnable(validateProduct());
    function activaButtonSubmitIfValidate() {}

    activaButtonSubmitIfValidate();
  }, [name, entryPrice, salePrice]);

  const handleSubmit = (): void => {
    if (alreadySubmitted) return;
    setAlreadySubmitted(true);

    const newProduct: Product = getDataProduct();

    dispatch({
      type: productId ? "UPDATE_PRODUCT" : "ADD_PRODUCT",
      payload: { product: newProduct },
    });

    navigation.goBack();

    Keyboard.dismiss();
    setProductId(0);
    setName("");
    setEntryPrice("");
    setSalePrice("");
  };

  const validateProduct = (): boolean => {
    return !!(
      name !== "" &&
      moneyTemplateToNumber(entryPrice) > 0 &&
      moneyTemplateToNumber(salePrice) > 0
    );
  };

  const getDataProduct = (): IProduct => {
    console.log(moneyTemplateToNumber(entryPrice));
    return {
      id: productId ? productId : Math.random(),
      name: name,
      entryPrice: moneyTemplateToNumber(entryPrice),
      salePrice: moneyTemplateToNumber(salePrice),
    };
  };

  return (
    <Layout
      title={productId ? "Editar Produto" : "Adicionar Produto"}
      hasGoBack
    >
      <Form
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      >
        <FieldsWrapper>
          <TextInput label="Nome" value={name} onChangeText={setName} />
          <MoneyInput
            label="Entrada"
            value={String(entryPrice)}
            onChangeText={setEntryPrice}
          />
          <MoneyInput
            label="Preço de Venda"
            value={String(salePrice)}
            onChangeText={setSalePrice}
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

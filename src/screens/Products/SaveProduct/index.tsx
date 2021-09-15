import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Keyboard } from "react-native";

import Layout from "../../../components/Layout";
import Product from "../../../types/Product";
import { productScreensProps } from "../../../routes";
import {
  Button,
  Field,
  Form,
  Input,
  Label,
  MoneyInput,
  TextButton,
} from "./styles";

const initialProduct = {
  name: "",
  entryPrice: 0,
  salePrice: 0,
};

const SaveProduct = ({ route }) => {
  const navigation = useNavigation<productScreensProps>();
  const dispatch = useDispatch();

  const [product, setProduct] = useState<Product>(initialProduct);
  const [alreadySubmitted] = useState(false);

  useEffect(() => {
    function loadProductIfExists() {
      if (route.params) {
        setProduct(route.params.product);
      }
    }

    loadProductIfExists();
  }, []);

  const handleSubmit = () => {
    if (alreadySubmitted) return;

    const newProduct: Product = {
      id: product.id ? product.id : Math.random(),
      name: product.name,
      entryPrice: Number(
        String(product.entryPrice).replace("R$", "").replace(",", ".")
      ),
      salePrice: Number(
        String(product.salePrice).replace("R$", "").replace(",", ".")
      ),
    };

    if (product.id) {
      dispatch({
        type: "UPDATE_PRODUCT",
        payload: { product: newProduct },
      });
    } else {
      dispatch({
        type: "ADD_PRODUCT",
        payload: { product: newProduct },
      });
    }

    navigation.navigate("ProductList");

    Keyboard.dismiss();
    setProduct(initialProduct);
  };

  return (
    <Layout
      title={product.id ? "Editar Produto" : "Adicionar Produto"}
      hasGoBack
    >
      <Form>
        <Field>
          <Label>Nome</Label>
          <Input
            value={product.name}
            onChangeText={(value: string) =>
              setProduct({ ...product, name: value })
            }
          />
        </Field>

        <Field>
          <Label>Entrada</Label>
          <MoneyInput
            type={"money"}
            value={product.entryPrice}
            onChangeText={(value: number) =>
              setProduct({ ...product, entryPrice: value })
            }
          />
        </Field>

        <Field>
          <Label>Preço de Venda</Label>
          <MoneyInput
            type={"money"}
            value={product.salePrice}
            onChangeText={(value: number) =>
              setProduct({ ...product, salePrice: value })
            }
          />
        </Field>
      </Form>

      <Button onPress={handleSubmit}>
        <TextButton>Salvar Produto</TextButton>
      </Button>
    </Layout>
  );
};

export default SaveProduct;

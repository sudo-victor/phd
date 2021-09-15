import React, { useState } from "react";
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

const AddProduct = () => {
  const navigation = useNavigation<productScreensProps>();

  const [name, setName] = useState("");
  const [entryPrice, setEntryPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);

  const handleSubmit = async () => {
    if (alreadySubmitted) return;

    const product: Product = {
      id: Math.random() * 300,
      name,
      entryPrice: Number(
        String(entryPrice).replace("R$", "").replace(",", ".")
      ),
      salePrice: Number(String(salePrice).replace("R$", "").replace(",", ".")),
    };

    try {
      // const productRepository = new GenericRepository<Product>('Product');
      // await productRepository.save(product);

      // setAlreadySubmitted(true);
      navigation.navigate("ProductList");
    } catch (error) {
      console.log(error);
      setAlreadySubmitted(false);
    }

    Keyboard.dismiss();
    setName("");
    setEntryPrice(0);
    setSalePrice(0);
  };

  return (
    <Layout title="Adicionar Produto" hasGoBack>
      <Form>
        <Field>
          <Label>Nome</Label>
          <Input
            value={name}
            onChangeText={(value: string) => setName(value)}
          />
        </Field>

        <Field>
          <Label>Entrada</Label>
          <MoneyInput
            type={"money"}
            value={entryPrice}
            onChangeText={(value: number) => setEntryPrice(value)}
          />
        </Field>

        <Field>
          <Label>Preço de Venda</Label>
          <MoneyInput
            type={"money"}
            value={salePrice}
            onChangeText={(value: number) => setSalePrice(value)}
          />
        </Field>
      </Form>

      <Button onPress={handleSubmit}>
        <TextButton>Criar Produto</TextButton>
      </Button>
    </Layout>
  );
};

export default AddProduct;

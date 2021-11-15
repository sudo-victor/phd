import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoneyInput from "../../../components/Inputs/MoneyInput";

import TextInput from "../../../components/Inputs/TextInput";
import Layout from "../../../components/Layout";
import SubmittingButton from "../../../components/SubmittingButton";

import Reducers from "../../../types/Reducers";

import { Container, FieldsWrapper } from "./styles";

const SaveSpent = () => {
  const products = useSelector((state: Reducers) => state.product);
  const sellers = useSelector((state: Reducers) => state.seller);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [value, setValue] = useState("0");

  return (
    <Layout title="Adicionar Gasto" hasGoBack>
      <Container
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
      >
        <FieldsWrapper>
          <TextInput
            label="Nome"
            placeholder="Ex: Água"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            label="Quantidade"
            keyboardType="number-pad"
            placeholder="0"
            value={amount}
            onChangeText={setAmount}
          />
          <MoneyInput
            label="Valor"
            placeholder="R$00,00"
            value={value}
            onChangeText={setValue}
          />
        </FieldsWrapper>

        <SubmittingButton text="Cadastrar Gasto" />
      </Container>
    </Layout>
  );
};

export default SaveSpent;

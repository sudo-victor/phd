import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";

import MoneyInput from "../../../components/Inputs/MoneyInput";
import TextInput from "../../../components/Inputs/TextInput";
import Layout from "../../../components/Layout";
import SubmittingButton from "../../../components/SubmittingButton";

import {
  moneyTemplateToNumber,
  numberToMoneyTemplate,
} from "../../../helpers/dataFormatting";
import { dailyScreensProps } from "../../../routes/DailyRoutes";
import { useDaily } from "../../../hooks/daily";
import { ISpent } from "../../../types/Daily";

import { Container, FieldsWrapper } from "./styles";

const SaveSpent = ({ route }) => {
  const navigation = useNavigation<dailyScreensProps>();
  const dispatch = useDispatch();
  const { daily } = useDaily();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [value, setValue] = useState("0");

  const [spentId, setSpentId] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);
  const [spentIsEnable, setSpentIsEnable] = useState(false);

  function handleSubmit() {
    if (name === "" || amount === "" || Number(value) === 0) return;

    const data = {
      id: spentId ? spentId : Math.random(),
      createdAt: createdAt ? createdAt : new Date(),
      name,
      amount: Number(amount),
      total: moneyTemplateToNumber(value),
    };

    dispatch({
      type: spentId ? "UPDATE_SPENT" : "ADD_SPENT",
      payload: { spent: data, idDaily: daily.id },
    });

    Keyboard.dismiss();
    navigation.goBack();
  }

  useEffect(() => {
    function loadSale() {
      if (route.params) {
        const spent = route.params.spent as ISpent;
        setSpentId(spent.id);
        setCreatedAt(spent.createdAt);
        setName(spent.name);
        setAmount(String(spent.amount));
        setValue(numberToMoneyTemplate(spent.total));
      }
    }

    loadSale();
  }, []);

  useEffect(() => {
    function enableAddSpent() {
      name === "" || amount === "" || Number(value) === 0
        ? setSpentIsEnable(false)
        : setSpentIsEnable(true);
    }

    enableAddSpent();
  }, [name, amount, value]);

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

        <SubmittingButton
          text="Cadastrar Gasto"
          enabled={spentIsEnable}
          onPress={handleSubmit}
        />
      </Container>
    </Layout>
  );
};

export default SaveSpent;

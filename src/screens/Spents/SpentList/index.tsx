import { useNavigation } from "@react-navigation/core";
import React from "react";

import Layout from "../../../components/Layout";
import Sale, { Item, ItemSale } from "../../../components/Sale";
import H2 from "../../../components/Titles/H2";
import { dailyScreensProps } from "../../../routes/DailyRoutes";

import {
  Container,
  CommissionContainer,
  ItemList,
  SaleContainer,
  SeparatorList,
} from "./styles";

const SpentList = () => {
  const navigation = useNavigation<dailyScreensProps>();

  const sales: Item[] = [
    {
      id: "1",
      title: "2 Camisas",
      value: "R$ 80,00",
      type: "card",
      saleBy: "Cacau",
      createdAt: "13:00",
    },
    {
      id: "2",
      title: "2 Camisas",
      value: "R$ 80,00",
      type: "money",
      saleBy: "Loja",
      createdAt: "14:00",
    },
    {
      id: "3",
      title: "2 Camisas",
      value: "R$ 80,00",
      type: "card",
      saleBy: "Loja",
      createdAt: "15:00",
    },
    {
      id: "4",
      title: "2 Camisas",
      value: "R$ 80,00",
      type: "money",
      saleBy: "Cacau",
      createdAt: "16:00",
    },
    {
      id: "5",
      title: "2 Camisas",
      value: "R$ 80,00",
      type: "card",
      saleBy: "Loja",
      createdAt: "17:00",
    },
    {
      id: "6",
      title: "2 Camisas",
      value: "R$ 80,00",
      type: "money",
      saleBy: "Fábio",
      createdAt: "18:00",
    },
  ];

  const commissions = [
    { id: "1", title: "Fábio", value: "R$ 180,00" },
    { id: "2", title: "Cacau", value: "R$ 580,00" },
    { id: "3", title: "Pedro", value: "R$ 780,00" },
  ];

  const goToForm = () => {
    navigation.navigate("SaveSpent");
  };

  return (
    <Layout title="Vendas" hasGoBack hasPlus handlePlus={() => goToForm()}>
      <Container>
        <SaleContainer>
          <H2>Lista de Vendas</H2>
          <ItemList
            data={sales}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Sale item={item} />}
            ItemSeparatorComponent={({ item }) => <SeparatorList />}
          />
        </SaleContainer>
      </Container>
    </Layout>
  );
};

export default SpentList;

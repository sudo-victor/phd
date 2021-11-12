import React from "react";

import Layout from "../../../components/Layout";
import { DataCard, InfoCard } from "../../../components/InfoCard";

import {
  Icon,
  ButtonsContainer,
  ButtonText,
  Date,
  InfoContainer,
  SaleButton,
  SpentButton,
  CashFlow,
  CashFlowTitle,
  CashFlowCards,
  CashFlowCardSeparator,
} from "./styles";
import { CashFlowCard } from "../../../components/CashFlowCard";

const SaveDaily = () => {
  const data = [
    {
      id: "1",
      title: "2 Camisas",
      value: "R$ 80,00",
      type: "sale",
      doneAt: "13:00",
    },
    {
      id: "2",
      title: "1 Água",
      value: "R$ 2,00",
      type: "spent",
      doneAt: "15:00",
    },
  ];

  const infoCards: DataCard[] = [
    {
      id: "1",
      title: "Dinheiro",
      value: "R$ 2.700,00",
      type: "money",
      updatedAt: "Última entrada às 17:20",
    },
    {
      id: "2",
      title: "Cartão",
      value: "R$ 530,00",
      type: "card",
      updatedAt: "Última entrada às 16:00",
    },
    {
      id: "3",
      title: "Gastos",
      value: "R$ 10,00",
      type: "spent",
      updatedAt: "Última saída às 13:00",
    },
    {
      id: "4",
      title: "Total",
      value: "R$ 3.220,00",
      type: "total",
      updatedAt: "Último movimento às 17:20",
    },
  ];

  return (
    <Layout title="Movimento de Caixa" hasGoBack>
      <Date>Hoje</Date>

      <InfoContainer>
        {infoCards.map((info) => (
          <InfoCard key={info.id} data={info} />
        ))}
      </InfoContainer>

      <ButtonsContainer>
        <SaleButton>
          <Icon name="arrow-up-circle" size={19} color="#12A454" />
          <ButtonText>Vendas</ButtonText>
        </SaleButton>
        <SpentButton>
          <Icon name="arrow-down-circle" size={19} color="#EF6161" />
          <ButtonText>Gastos</ButtonText>
        </SpentButton>
      </ButtonsContainer>

      <CashFlow>
        <CashFlowTitle>Listagem</CashFlowTitle>

        <CashFlowCards
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CashFlowCard data={item} />}
          ItemSeparatorComponent={() => <CashFlowCardSeparator />}
        />
      </CashFlow>
    </Layout>
  );
};

export default SaveDaily;

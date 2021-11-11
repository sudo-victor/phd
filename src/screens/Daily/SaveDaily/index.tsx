import React from "react";

import Layout from "../../../components/Layout";
import { InfoCard } from "../../../components/InfoCard";

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
} from "./styles";

const SaveDaily = () => {
  return (
    <Layout title="Movimento de Caixa" hasGoBack>
      <Date>Hoje</Date>

      <InfoContainer>
        <InfoCard title="Dinheiro" value="R$ 17.000,00" type="money" />
        <InfoCard title="Cartão" value="R$ 17.000,00" type="card" />
        <InfoCard title="Gastos" value="R$ 17.000,00" type="spent" />
        <InfoCard title="Total" value="R$ 17.000,00" type="total" />
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
      </CashFlow>
    </Layout>
  );
};

export default SaveDaily;

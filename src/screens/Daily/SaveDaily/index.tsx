import React from "react";

import {
  BalanceCard,
  BalanceContainer,
  BalanceGroup,
  BalanceGroupTitle,
  BalanceGroupValue,
  Button,
  Icon,
  ButtonsContainer,
  ButtonText,
  Date,
  SaleButton,
  SpentButton,
} from "./styles";
import Layout from "../../../components/Layout";

const SaveDaily = () => {
  return (
    <Layout title="Movimento de Caixa" hasGoBack>
      <Date>Hoje</Date>

      <ButtonsContainer>
        <SaleButton>
          <Icon name="arrow-up-circle" size={19} />
          <ButtonText>Vendas</ButtonText>
        </SaleButton>
        <SpentButton>
          <Icon name="arrow-down-circle" size={19} />
          <ButtonText>Gastos</ButtonText>
        </SpentButton>
      </ButtonsContainer>

      <BalanceContainer>
        <BalanceCard>
          <BalanceGroup>
            <BalanceGroupTitle></BalanceGroupTitle>
            <BalanceGroupValue></BalanceGroupValue>
          </BalanceGroup>
        </BalanceCard>
      </BalanceContainer>
    </Layout>
  );
};

export default SaveDaily;

import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";

import Layout from "../../../components/Layout";
import { InfoCard, DataCard } from "../../../components/InfoCard";
import { CashFlowCard } from "../../../components/CashFlowCard";
import H2 from "../../../components/Titles/H2";

import {
  Icon,
  InfoWrapper,
  ButtonsContainer,
  ButtonText,
  DateLabel,
  InfoContainer,
  SaleButton,
  SpentButton,
  CashFlow,
  CashFlowCards,
  CashFlowCardSeparator,
} from "./styles";
import { dailyScreensProps } from "../../../routes/DailyRoutes";
import { IDaily } from "../../../types/Daily";
import { numberToMoneyTemplate } from "../../../helpers/dataFormatting";
import { dateFormatted } from "../../../helpers/date";

const initialInfoCard: DataCard[] = [
  {
    id: "1",
    title: "Dinheiro",
    value: "R$ 0,00",
    type: "money",
    updatedAt: "Nenhuma entrada feita",
  },
  {
    id: "2",
    title: "Cartão",
    value: "R$ 0,00",
    type: "card",
    updatedAt: "Nenhuma entrada feita",
  },
  {
    id: "3",
    title: "Gastos",
    value: "R$ 0,00",
    type: "spent",
    updatedAt: "Nenhuma saída feita",
  },
  {
    id: "4",
    title: "Total",
    value: "R$ 0,00",
    type: "total",
    updatedAt: "Nenhum movimento feito",
  },
];

const getValueOfInfoCard = {
  money: (daily: IDaily) => daily.sales.cashTotal,
  card: (daily: IDaily) => daily.sales.cardTotal,
  spent: (daily: IDaily) => daily.spents.total,
  total: (daily: IDaily) => daily.sales.total - daily.spents.total,
};

const SaveDaily = ({ route }) => {
  const navigation = useNavigation<dailyScreensProps>();

  const [daily, setDaily] = useState<IDaily>();
  const [title, setTitle] = useState("");
  const [infoCardGroup, setInfoCardGroup] =
    useState<DataCard[]>(initialInfoCard);

  useEffect(() => {
    function loadDaily() {
      if (route.params) {
        setDaily(route.params.daily);
        route.params.daily.createdAt &&
          setTitle(dateFormatted(new Date(route.params.daily.createdAt)));
      }
    }

    loadDaily();
  }, [route]);

  useEffect(() => {
    function loadInfoCards() {
      const newInfoCardGroup = infoCardGroup.map((ic) => {
        const currentValue = getValueOfInfoCard[ic.type](daily);
        return {
          ...ic,
          value: numberToMoneyTemplate(currentValue),
          updatedAt:
            currentValue === 0
              ? "Nenhuma entrada feita"
              : `Última entrada às 12:00`,
        };
      });
      setInfoCardGroup(newInfoCardGroup);
    }

    const timer = setTimeout(loadInfoCards, 200);

    return () => clearTimeout(timer);
  }, [daily]);

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
    {
      id: "3",
      title: "1 Água",
      value: "R$ 2,00",
      type: "spent",
      doneAt: "15:00",
    },
  ];

  const handleNavigateToSale = () => {
    navigation.navigate("SaleList");
  };

  const handleNavigateToSpent = () => {
    navigation.navigate("SpentList");
  };

  return (
    <Layout title="Movimento de Caixa" hasGoBack>
      <DateLabel>{title}</DateLabel>

      <InfoWrapper>
        <InfoContainer>
          {infoCardGroup.map((info) => (
            <InfoCard key={info.id} data={info} />
          ))}
        </InfoContainer>
      </InfoWrapper>

      <ButtonsContainer>
        <SaleButton onPress={handleNavigateToSale}>
          <Icon name="arrow-up-circle" size={19} color="#12A454" />
          <ButtonText>Vendas</ButtonText>
        </SaleButton>
        <SpentButton onPress={handleNavigateToSpent}>
          <Icon name="arrow-down-circle" size={19} color="#EF6161" />
          <ButtonText>Gastos</ButtonText>
        </SpentButton>
      </ButtonsContainer>

      <CashFlow>
        <H2>Listagem</H2>

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

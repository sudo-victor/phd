import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";

import Layout from "../../../components/Layout";
import { InfoCard, DataCard } from "../../../components/InfoCard";
import { CashFlowCard } from "../../../components/CashFlowCard";
import H2 from "../../../components/Titles/H2";
import EmptyListText from "../../../components/EmptyListText";

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
import Reducers from "../../../types/Reducers";
import { numberToMoneyTemplate } from "../../../helpers/dataFormatting";
import { dateFormatted, dateToHoursTemplate } from "../../../helpers/date";
import { useDaily } from "../../../hooks/daily";
import { useSelector } from "react-redux";
import { sortByCreatedAt } from "../../../helpers/list";

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
    title: "Comissões",
    value: "R$ 0,00",
    type: "commission",
    updatedAt: "Nenhum movimento feito",
  },
  {
    id: "5",
    title: "Total",
    value: "R$ 0,00",
    type: "total",
    updatedAt: "Nenhum movimento feito",
  },
];

const getValueOfInfoCard = {
  money: (daily: IDaily) => {
    return {
      total: daily.sales.cashTotal,
      updatedAt:
        daily.sales.sales.length > 0
          ? daily.sales.sales
              .sort(sortByCreatedAt)
              .filter((s) => s.saleType === "money")[0]?.createdAt
          : null,
    };
  },
  card: (daily: IDaily) => {
    return {
      total: daily.sales.cardTotal,
      updatedAt:
        daily.sales.sales.length > 0
          ? daily.sales.sales
              .sort(sortByCreatedAt)
              .filter((s) => s.saleType === "card")[0]?.createdAt
          : null,
    };
  },
  spent: (daily: IDaily) => {
    return {
      total: daily.spents.total,
      updatedAt:
        daily.spents.spents.length > 0
          ? daily.spents.spents.sort(sortByCreatedAt)[0]?.createdAt
          : null,
    };
  },
  commission: (daily: IDaily) => {
    let lastSale = daily.sales.sales
      .sort(sortByCreatedAt)
      .filter((s) => s.commission.sellerId)[0];

    let total = 0;

    daily.sales.sales.forEach((sale) => {
      sale.commission.commissions.forEach((c) => {
        total += c.value;
      });
    });

    return {
      total: total,
      updatedAt: lastSale ? lastSale.createdAt : null,
    };
  },
  total: (daily: IDaily) => {
    let commissionTotal = 0;

    daily.sales.sales.forEach((sale) => {
      sale.commission.commissions.forEach((c) => {
        commissionTotal += c.value;
      });
    });

    return {
      total: daily.sales.total - daily.spents.total - commissionTotal,
      updatedAt: daily.sales.sales.length
        ? [...daily.sales.sales, ...daily.spents.spents].sort(
            sortByCreatedAt
          )[0]?.createdAt
        : null,
    };
  },
};

const SaveDaily = () => {
  const navigation = useNavigation<dailyScreensProps>();
  const dailyStorage = useSelector((state: Reducers) => state.daily);
  const product = useSelector((state: Reducers) => state.product);
  const { daily } = useDaily();

  const [title, setTitle] = useState("");
  const [cashFlows, setCashFlows] = useState([]);
  const [infoCardGroup, setInfoCardGroup] =
    useState<DataCard[]>(initialInfoCard);

  useEffect(() => {
    function loadDaily() {
      daily.createdAt && setTitle(dateFormatted(new Date(daily.createdAt)));
    }

    function loadInfoCards() {
      const newInfoCardGroup = infoCardGroup.map((ic) => {
        const currentValue = getValueOfInfoCard[ic.type](daily);
        return {
          ...ic,
          value: numberToMoneyTemplate(currentValue.total),
          updatedAt:
            currentValue.total === 0
              ? "Nenhuma entrada feita"
              : `Último movimento às ${dateToHoursTemplate(
                  currentValue.updatedAt && currentValue.updatedAt
                )}`,
        };
      });
      setInfoCardGroup(newInfoCardGroup);
    }

    function loadCashFlow() {
      let cashFlowGroup = [...daily.sales.sales, ...daily.spents.spents]
        .sort(sortByCreatedAt)
        .map((flow: any) => {
          let title = "";

          flow.products &&
            flow.products.forEach((p) => {
              title += `${p.amount} ${
                product.find((d) => d.id === p.productId).name
              } `;
            });

          return {
            id: flow.id,
            name: flow.saleType ? title : flow.name,
            value: flow.total,
            type: flow.saleType ? "sale" : "spent",
            createdAt: flow.createdAt,
          };
        });

      setCashFlows(cashFlowGroup);
    }

    const timer = setTimeout(loadInfoCards, 100);
    loadDaily();
    loadCashFlow();

    return () => clearTimeout(timer);
  }, [dailyStorage]);

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
          data={cashFlows}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <CashFlowCard data={item} />}
          ItemSeparatorComponent={() => <CashFlowCardSeparator />}
          ListEmptyComponent={() => (
            <EmptyListText text="Nenhum Movimento Cadastrado" />
          )}
        />
      </CashFlow>
    </Layout>
  );
};

export default SaveDaily;

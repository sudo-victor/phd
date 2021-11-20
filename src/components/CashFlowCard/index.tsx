import React from "react";
import { useSelector } from "react-redux";

import { numberToMoneyTemplate } from "../../helpers/dataFormatting";
import { dateToHoursTemplate } from "../../helpers/date";

import { ISale } from "../../types/Daily";
import Reducers from "../../types/Reducers";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Value,
  CategoryContainer,
  CategoryName,
  CreatedAt,
} from "./styles";

type Data = {
  id: number;
  name: string;
  value: number;
  type: "sale" | "spent";
  createdAt: Date;
};

type Props = {
  data: Data;
  type?: "sale" | "spent";
};

const icons = {
  sale: "arrow-up-circle",
  spent: "arrow-down-circle",
};

const typeLabel = {
  sale: "Venda",
  spent: "Gasto",
};

export type CashFlow = {};

const CashFlowCard: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Header>
        <Title numberOfLines={1}>{data.name}</Title>
        <Value type={data.type}>{numberToMoneyTemplate(data.value)}</Value>
      </Header>
      <Footer>
        <CategoryContainer>
          <Icon name={icons[data.type]} type={data.type} />
          <CategoryName>{typeLabel[data.type]}</CategoryName>
        </CategoryContainer>

        <CreatedAt>
          {data.createdAt && dateToHoursTemplate(data.createdAt)}
        </CreatedAt>
      </Footer>
    </Container>
  );
};

export { CashFlowCard };

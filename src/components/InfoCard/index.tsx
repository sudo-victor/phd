import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Value,
  UpdatedAt,
} from "./styles";

type DataCard = {
  id: string;
  title: string;
  value: string;
  updatedAt: string;
  type: "money" | "card" | "spent" | "total" | "commission";
};

type Props = {
  data: DataCard;
};

const icons = {
  money: "cash-plus",
  card: "card-text",
  spent: "cash-minus",
  total: "cash-register",
  commission: "account-cash",
};

const InfoCard: React.FC<Props> = ({ data }) => {
  return (
    <Container type={data.type}>
      <Header>
        <Title type={data.type}>{data.title}</Title>

        <Icon type={data.type} name={icons[data.type]} />
      </Header>

      <Footer>
        <Value type={data.type}>{data.value}</Value>
        <UpdatedAt type={data.type}>{data.updatedAt}</UpdatedAt>
      </Footer>
    </Container>
  );
};

export { InfoCard, DataCard };

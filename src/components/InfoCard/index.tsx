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

type Props = {
  title: string;
  value: string;
  type: "money" | "card" | "spent" | "total";
};

const icons = {
  money: "cash-plus",
  card: "card-text",
  spent: "cash-minus",
  total: "cash-register",
};

const InfoCard: React.FC<Props> = ({ title, value, type }) => {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>

        <Icon type={type} name={icons[type]} />
      </Header>

      <Footer>
        <Value type={type}>{value}</Value>
        <UpdatedAt type={type}>Última entrada ás 13:00</UpdatedAt>
      </Footer>
    </Container>
  );
};

export { InfoCard };

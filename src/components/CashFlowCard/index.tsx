import React from "react";

import {
  Container,
  Title,
  Icon,
  Footer,
  Value,
  CategoryContainer,
  CategoryName,
  DoneAt,
} from "./styles";

type Data = {
  title?: string;
  value?: string;
  doneAt?: string;
  type?: "sale" | "spent";
};

type Props = {
  data: Data;
};

const icons = {
  sale: "arrow-up-circle",
  spent: "arrow-down-circle",
};

const typeLabel = {
  sale: "Venda",
  spent: "Gasto",
};

const CashFlowCard: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Value type={data.type}>{data.value}</Value>
      <Footer>
        <CategoryContainer>
          <Icon name={icons[data.type]} type={data.type} />
          <CategoryName>{typeLabel[data.type]}</CategoryName>
        </CategoryContainer>

        <DoneAt>{data.doneAt}</DoneAt>
      </Footer>
    </Container>
  );
};

export { CashFlowCard };

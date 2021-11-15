import React from "react";
import {
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";

import H2 from "../Titles/H2";

import {
  Container,
  Header,
  Title,
  Value,
  Footer,
  TypeWrapper,
  Icon,
  Separator,
  SaleBy,
  CreatedAt,
  ContainerActions,
  DuplicateButton,
  EditButton,
  DeleteButton,
} from "./styles";

export type Item = {
  id: string;
  title: string;
  value: string;
  type: "card" | "money";
  saleBy: string;
  createdAt: string;
};

type Props = {
  item?: Item;
  handleDeleteItem?: (item: any) => void;
  goToEdit?: (item: any) => void;
};

const icons = {
  card: "credit-card-outline",
  money: "cash-usd-outline",
};

export const ItemSale: React.FC<Props> = ({ item }) => {
  return (
    <Container>
      <Header>
        <Title>{item.title}</Title>
        <Value>{item.value}</Value>
      </Header>

      <Footer>
        <TypeWrapper>
          <Icon name={icons[item.type]} type={item.type} />
          <Separator />
          <SaleBy>{item.saleBy}</SaleBy>
        </TypeWrapper>

        <CreatedAt>{item.createdAt}</CreatedAt>
      </Footer>
    </Container>
  );
};

const RightActions: React.FC<Props> = ({
  item,
  handleDeleteItem,
  goToEdit,
}) => {
  {
    return (
      <ContainerActions>
        <DuplicateButton onPress={() => goToEdit(item)}>
          <MaterialCommunityIcons
            name="content-duplicate"
            color="#fff"
            size={22}
          />
        </DuplicateButton>

        <EditButton onPress={() => goToEdit(item)}>
          <FontAwesome5 name="pencil-alt" color="#fff" size={18} />
        </EditButton>

        <DeleteButton onPress={() => handleDeleteItem(item)}>
          <Feather name="trash" color="#fff" size={18} />
        </DeleteButton>
      </ContainerActions>
    );
  }
};

const Sale: React.FC<Props> = ({ item, handleDeleteItem, goToEdit }) => {
  return (
    <Swipeable
      renderRightActions={() => (
        <RightActions
          handleDeleteItem={handleDeleteItem}
          goToEdit={goToEdit}
          item={item}
        />
      )}
    >
      <ItemSale item={item} />
    </Swipeable>
  );
};

export default Sale;

import React from "react";
import {
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

import { ISale } from "../../types/Daily";
import Reducers from "../../types/Reducers";
import { numberToMoneyTemplate } from "../../helpers/dataFormatting";

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
import { dateToHoursTemplate } from "../../helpers/date";

type Props = {
  item?: ISale;
  handleDeleteItem?: (item: any) => void;
  handleDuplicateItem?: (item: any) => void;
  goToEdit?: (item: any) => void;
};

const icons = {
  card: "credit-card-outline",
  money: "cash-usd-outline",
};

export const ItemSale: React.FC<Props> = ({ item }) => {
  const product = useSelector((state: Reducers) => state.product);
  const seller = useSelector((state: Reducers) => state.seller);

  function generateTitleByProducts(): string {
    let title = "";

    item.products.forEach((p) => {
      title += `${p.amount} ${product.find((d) => d.id === p.productId).name} `;
    });

    return title;
  }

  function getSeller(): string {
    return item.commission.sellerId
      ? seller.find((s) => Number(s.id) === Number(item.commission?.sellerId))
          .name
      : "Loja";
  }

  return (
    <Container>
      <Header>
        <Title numberOfLines={1}>{generateTitleByProducts()}</Title>
        <Value>{numberToMoneyTemplate(item.total)}</Value>
      </Header>

      <Footer>
        <TypeWrapper>
          <Icon name={icons[item.saleType]} type={item.saleType} />
          <Separator />
          <SaleBy>{getSeller()}</SaleBy>
        </TypeWrapper>

        <CreatedAt>
          {item.createdAt && dateToHoursTemplate(item.createdAt)}
        </CreatedAt>
      </Footer>
    </Container>
  );
};

const RightActions: React.FC<Props> = ({
  item,
  handleDeleteItem,
  handleDuplicateItem,
  goToEdit,
}) => {
  {
    return (
      <ContainerActions>
        <DuplicateButton onPress={() => handleDuplicateItem(item)}>
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

const Sale: React.FC<Props> = ({
  item,
  handleDeleteItem,
  handleDuplicateItem,
  goToEdit,
}) => {
  return (
    <Swipeable
      renderRightActions={() => (
        <RightActions
          handleDeleteItem={handleDeleteItem}
          handleDuplicateItem={handleDuplicateItem}
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

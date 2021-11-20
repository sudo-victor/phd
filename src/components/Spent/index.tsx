import React from "react";
import {
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";

import {
  Container,
  Header,
  Title,
  Value,
  Footer,
  CreatedAt,
  ContainerActions,
  DuplicateButton,
  EditButton,
  DeleteButton,
} from "./styles";
import { ISpent } from "../../types/Daily";
import { dateToHoursTemplate } from "../../helpers/date";
import { numberToMoneyTemplate } from "../../helpers/dataFormatting";

type Props = {
  item?: ISpent;
  handleDeleteItem?: (item: any) => void;
  handleDuplicateItem?: (item: any) => void;
  goToEdit?: (item: any) => void;
};

export const ItemSpent: React.FC<Props> = ({ item }) => {
  return (
    <Container>
      <Header>
        <Title>{item.name}</Title>
        <Value>{numberToMoneyTemplate(item.total)}</Value>
      </Header>

      <Footer>
        <CreatedAt>{dateToHoursTemplate(item.createdAt)}</CreatedAt>
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

const Spent: React.FC<Props> = ({
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
      <ItemSpent item={item} />
    </Swipeable>
  );
};

export default Spent;

import React from "react";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Item from "../Item";
import { ContainerActions, EditButton, DeleteButton } from "./styles";

type Props = {
  item: any;
  handleDeleteItem: (item: any) => void;
  goToEdit: (item: any) => void;
};

const RightActions: React.FC<Props> = ({
  item,
  handleDeleteItem,
  goToEdit,
}) => {
  {
    return (
      <ContainerActions>
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

const ListItem: React.FC<Props> = ({ item, handleDeleteItem, goToEdit }) => {
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
      <Item text={item.name} />
    </Swipeable>
  );
};

export default ListItem;

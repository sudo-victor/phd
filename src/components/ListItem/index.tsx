import React, { useEffect } from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
// import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
// import FeatherIcon from 'react-native-vector-icons/Feather';

import Item from "../Item";
import { ContainerActions, EditButton, DeleteButton } from "./styles";
import Product from "../../types/Product";

type ListItemProps = {
  item: Product;
};

type ActionsProps = {
  item: Product;
};

const RightActions: React.FC<ActionsProps> = ({ item }) => {
  const handleDeleteProduct = async (product: Product) => {};

  {
    return (
      <ContainerActions>
        <EditButton>
          {/* <FontAwesome5Icon name="pencil-alt" color="#fff" size={18} /> */}
        </EditButton>

        <DeleteButton onPress={() => handleDeleteProduct(item)}>
          {/* <FeatherIcon name="trash" color="#fff" size={18} /> */}
        </DeleteButton>
      </ContainerActions>
    );
  }
};

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <Swipeable renderRightActions={() => <RightActions item={item} />}>
      <Item text={item.name} />
    </Swipeable>
  );
};

export default ListItem;

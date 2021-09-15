import React from "react";
import { useNavigation } from "@react-navigation/core";
import { useDispatch } from "react-redux";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { productScreensProps } from "../../routes";
import Item from "../Item";
import { ContainerActions, EditButton, DeleteButton } from "./styles";
import Product from "../../types/Product";

type Props = {
  item: Product;
};

const RightActions: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<productScreensProps>();

  const handleDeleteProduct = () => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: { product: item },
    });
  };

  const goToEdit = () => {
    navigation.navigate("SaveProduct", { product: item });
  };

  {
    return (
      <ContainerActions>
        <EditButton onPress={goToEdit}>
          <FontAwesome5 name="pencil-alt" color="#fff" size={18} />
        </EditButton>

        <DeleteButton onPress={handleDeleteProduct}>
          <Feather name="trash" color="#fff" size={18} />
        </DeleteButton>
      </ContainerActions>
    );
  }
};

const ListItem: React.FC<Props> = ({ item }) => {
  return (
    <Swipeable renderRightActions={() => <RightActions item={item} />}>
      <Item text={item.name} />
    </Swipeable>
  );
};

export default ListItem;

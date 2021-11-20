import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import Layout from "../../../components/Layout";
import ListItem from "../../../components/ListItem";
import { ContainerList } from "./styles";
import { sellerScreensProps } from "../../../routes/SellersRoutes";
import Reducers from "../../../types/Reducers";
import { ISeller } from "../../../types/Seller";
import EmptyListText from "../../../components/EmptyListText";
import { Alert } from "react-native";

const SellerList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<sellerScreensProps>();
  const sellers = useSelector((state: Reducers) => state.seller);
  const daily = useSelector((state: Reducers) => state.daily);

  const goToForm = (item?) => {
    item
      ? navigation.navigate("SaveSeller", { seller: item })
      : navigation.navigate("SaveSeller");
  };

  const handleDeleteSeller = (item) => {
    let isUsed = false;

    daily.forEach((d) => {
      d.sales.sales.forEach((sale) => {
        if (sale.commission.sellerId === item.id) {
          isUsed = true;
        }
      });
    });

    if (isUsed) {
      Alert.alert(
        "Este vendedor não pode ser excluído, pois está sendo usado."
      );
    } else {
      dispatch({
        type: "REMOVE_SELLER",
        payload: { seller: item },
      });
    }
  };

  return (
    <Layout title="Lista de Vendedores" hasPlus handlePlus={() => goToForm()}>
      <ContainerList
        data={sellers}
        keyExtractor={(item: ISeller) => String(item.id)}
        ListEmptyComponent={() => (
          <EmptyListText text="Nenhum Vendedor Cadastrado" />
        )}
        renderItem={({ item }) => (
          <ListItem
            handleDeleteItem={handleDeleteSeller}
            goToEdit={goToForm}
            item={item}
          />
        )}
      />
    </Layout>
  );
};

export default SellerList;

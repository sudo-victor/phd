import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import Layout from "../../../components/Layout";
import ListItem from "../../../components/ListItem";
import { ContainerList, EmpytListText } from "./styles";
import { sellerScreensProps } from "../../../routes/SellersRoutes";
import Reducers from "../../../types/Reducers";
import { ISeller } from "../../../types/Seller";

const SellerList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<sellerScreensProps>();
  const sellers = useSelector((state: Reducers) => state.seller);

  const goToForm = () => {
    navigation.navigate("SaveSeller");
  };

  const goToEdit = (item) => {
    navigation.navigate("SaveSeller", { seller: item });
  };

  const handleDeleteSeller = (item) => {
    dispatch({
      type: "REMOVE_SELLER",
      payload: { seller: item },
    });
  };

  return (
    <Layout title="Lista de Vendedores" hasPlus handlePlus={goToForm}>
      <ContainerList
        data={sellers}
        keyExtractor={(item: ISeller) => String(item.id)}
        ListEmptyComponent={() => (
          <EmpytListText>Nenhum Vendedor Cadastrado</EmpytListText>
        )}
        renderItem={({ item }) => (
          <ListItem
            handleDeleteItem={handleDeleteSeller}
            goToEdit={goToEdit}
            item={item}
          />
        )}
      />
    </Layout>
  );
};

export default SellerList;

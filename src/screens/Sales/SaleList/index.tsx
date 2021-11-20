import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../../components/Layout";
import Sale from "../../../components/Sale";
import H2 from "../../../components/Titles/H2";
import EmptyListText from "../../../components/EmptyListText";

import { useDaily } from "../../../hooks/daily";

import { dailyScreensProps } from "../../../routes/DailyRoutes";
import Reducers from "../../../types/Reducers";
import { ISale } from "../../../types/Daily";
import { sortByCreatedAt } from "../../../helpers/list";
import {
  Container,
  SaleContainer,
  ItemList,
  SeparatorList,
  CommissionsButton,
  CommissionsTitle,
  Icon,
} from "./styles";

const SaleList = () => {
  const navigation = useNavigation<dailyScreensProps>();
  const dailyPersisted = useSelector((state: Reducers) => state.daily);
  const dispatch = useDispatch();
  const { daily } = useDaily();

  const [saleGroup, setSaleGroup] = useState<ISale[]>([]);

  const goToForm = (item?: any) => {
    item
      ? navigation.navigate("SaveSale", { sale: item })
      : navigation.navigate("SaveSale");
  };

  const handleGoToCommissions = () => {
    navigation.navigate("CommissionList");
  };

  const handleDelete = (item: any) => {
    dispatch({
      type: "REMOVE_SALE",
      payload: { sale: item, idDaily: daily.id },
    });
  };

  const handleDuplicate = (item: any) => {
    const data = {
      ...item,
      id: Math.random(),
      createdAt: new Date(),
    };

    dispatch({
      type: "ADD_SALE",
      payload: { sale: data, idDaily: daily.id },
    });
  };

  useEffect(() => {
    function loadSaleGroup() {
      const salesFiltered =
        daily && dailyPersisted.find((d) => d.id === daily.id);

      setSaleGroup(salesFiltered.sales.sales.sort(sortByCreatedAt));
    }

    loadSaleGroup();
  }, [dailyPersisted]);

  return (
    <Layout title="Vendas" hasGoBack hasPlus handlePlus={() => goToForm()}>
      <Container>
        <CommissionsButton onPress={handleGoToCommissions}>
          <CommissionsTitle>Comissões</CommissionsTitle>
          <Icon name="eye" size={18} />
        </CommissionsButton>

        <SaleContainer>
          <H2>Lista de Vendas</H2>
          <ItemList
            data={saleGroup}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Sale
                item={item}
                handleDeleteItem={handleDelete}
                handleDuplicateItem={handleDuplicate}
                goToEdit={goToForm}
              />
            )}
            ItemSeparatorComponent={() => <SeparatorList />}
            ListEmptyComponent={() => (
              <EmptyListText text="Nenhuma Venda Cadastrada" />
            )}
          />
        </SaleContainer>
      </Container>
    </Layout>
  );
};

export default SaleList;

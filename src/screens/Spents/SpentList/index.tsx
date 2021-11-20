import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../../components/Layout";
import Spent from "../../../components/Spent";
import H2 from "../../../components/Titles/H2";
import EmptyListText from "../../../components/EmptyListText";

import { Container, ItemList, SaleContainer, SeparatorList } from "./styles";
import { dailyScreensProps } from "../../../routes/DailyRoutes";
import { sortByCreatedAt } from "../../../helpers/list";
import { useDaily } from "../../../hooks/daily";
import Reducers from "../../../types/Reducers";
import { ISpent } from "../../../types/Daily";

const SpentList = () => {
  const navigation = useNavigation<dailyScreensProps>();
  const dailyPersisted = useSelector((state: Reducers) => state.daily);
  const dispatch = useDispatch();
  const { daily } = useDaily();

  const [spentGroup, setSpentGroup] = useState<ISpent[]>([]);

  const goToForm = (item?: any) => {
    item
      ? navigation.navigate("SaveSpent", { spent: item })
      : navigation.navigate("SaveSpent");
  };

  const handleDelete = (item: any) => {
    dispatch({
      type: "REMOVE_SPENT",
      payload: { spent: item, idDaily: daily.id },
    });
  };

  const handleDuplicate = (item: any) => {
    const data = {
      ...item,
      id: Math.random(),
      createdAt: new Date(),
    };

    dispatch({
      type: "ADD_SPENT",
      payload: { spent: data, idDaily: daily.id },
    });
  };

  useEffect(() => {
    function loadSpentGroup() {
      const spentsFiltered =
        daily && dailyPersisted.find((d) => d.id === daily.id);

      setSpentGroup(spentsFiltered.spents.spents.sort(sortByCreatedAt));
    }

    loadSpentGroup();
  }, [dailyPersisted]);

  return (
    <Layout title="Gastos" hasGoBack hasPlus handlePlus={() => goToForm()}>
      <Container>
        <SaleContainer>
          <H2>Lista de Gastos</H2>
          <ItemList
            data={spentGroup}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Spent
                item={item}
                handleDeleteItem={handleDelete}
                handleDuplicateItem={handleDuplicate}
                goToEdit={goToForm}
              />
            )}
            ItemSeparatorComponent={() => <SeparatorList />}
            ListEmptyComponent={() => (
              <EmptyListText text="Nenhum Gasto Cadastrado" />
            )}
          />
        </SaleContainer>
      </Container>
    </Layout>
  );
};

export default SpentList;

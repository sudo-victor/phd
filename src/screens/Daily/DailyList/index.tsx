import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import Layout from "../../../components/Layout";
import ListItem from "../../../components/ListItem";
import EmptyListText from "../../../components/EmptyListText";
import Reducers from "../../../types/Reducers";
import { IDaily } from "../../../types/Daily";
import { dailyScreensProps } from "../../../routes/DailyRoutes";
import { ContainerList } from "./styles";

const DailyList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<dailyScreensProps>();
  const daily = useSelector((state: Reducers) => state.daily);

  const goToForm = (item?) => {
    const daily = generateDaily();
    // !item && handleCreateDaily(daily);

    navigation.navigate("SaveDaily");
  };

  const generateDaily = (): IDaily => {
    return {
      id: Math.random(),
      createdAt: new Date(),
    };
  };

  const handleCreateDaily = (daily: IDaily) => {
    dispatch({
      type: "ADD_DAILY",
      payload: { daily },
    });

    return daily;
  };

  const handleDeleteDaily = (item) => {
    dispatch({
      type: "REMOVE_DAILY",
      payload: { daily: item },
    });
  };

  return (
    <Layout title="Lista de Diárias" hasPlus handlePlus={() => goToForm()}>
      <ContainerList
        data={daily}
        keyExtractor={(item: IDaily) => String(item.id)}
        ListEmptyComponent={() => (
          <EmptyListText text="Nenhuma Diária Cadastrada" />
        )}
        renderItem={({ item }) => (
          <ListItem
            handleDeleteItem={handleDeleteDaily}
            goToEdit={goToForm}
            item={item}
          />
        )}
      />
    </Layout>
  );
};

export default DailyList;

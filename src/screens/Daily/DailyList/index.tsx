import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import Layout from "../../../components/Layout";
import ListItem from "../../../components/ListItem";
import EmptyListText from "../../../components/EmptyListText";

import Reducers from "../../../types/Reducers";
import { IDaily } from "../../../types/Daily";

import { dailyScreensProps } from "../../../routes/DailyRoutes";
import { compareDates, dateFormatted } from "../../../helpers/date";
import { useDaily } from "../../../hooks/daily";
import { ContainerList } from "./styles";
import { sortByCreatedAt } from "../../../helpers/list";

const DailyList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<dailyScreensProps>();
  const daily = useSelector((state: Reducers) => state.daily);
  const { handleUpdateDaily } = useDaily();

  const [dailyFormatted, setDailyFormatted] = useState([]);

  useEffect(() => {
    function loadDaily() {
      const newDaily = daily.sort(sortByCreatedAt).map((d) => {
        return {
          id: d.id,
          name: dateFormatted(new Date(d.createdAt)),
        };
      });

      setDailyFormatted(newDaily);
    }

    loadDaily();
  }, [daily]);

  const goToForm = (id?: number) => {
    const today = new Date();
    const itemById = daily.find((item) => item.id === id);
    const alreadyExists =
      itemById || daily.find((d) => compareDates(new Date(d.createdAt), today));

    const newDaily = generateDaily();

    if (!alreadyExists) {
      !itemById && handleCreateDaily(newDaily);
    }

    handleUpdateDaily(alreadyExists || newDaily);
    navigation.navigate("SaveDaily");
  };

  const generateDaily = (): IDaily => {
    return {
      id: Math.random(),
      sales: {
        total: 0,
        cashTotal: 0,
        cardTotal: 0,
        sales: [],
      },
      spents: {
        total: 0,
        spents: [],
      },
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
        data={dailyFormatted}
        keyExtractor={(item: IDaily) => String(item.id)}
        ListEmptyComponent={() => (
          <EmptyListText text="Nenhuma Diária Cadastrada" />
        )}
        renderItem={({ item }) => (
          <ListItem goToEdit={() => goToForm(item.id)} item={item} />
        )}
      />
    </Layout>
  );
};

export default DailyList;

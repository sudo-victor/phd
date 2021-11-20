import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import Layout from "../../../components/Layout";
import EmptyListText from "../../../components/EmptyListText";

import { numberToMoneyTemplate } from "../../../helpers/dataFormatting";
import { useDaily } from "../../../hooks/daily";
import Reducers from "../../../types/Reducers";

import { Container, Commission, SellerName, SellerValue } from "./styles";

type Commission = {
  sellerId: number;
  value: number;
};

export default function CommissionList() {
  const [commissions, setCommissions] = useState<Commission[]>([]);
  const sellers = useSelector((state: Reducers) => state.seller);
  const { daily } = useDaily();

  const getSellerName = (sellerId: number): string => {
    return sellers.find((s) => s.id === sellerId).name;
  };

  useEffect(() => {
    function loadCommissions() {
      let commissionGroup: Commission[] = [];

      daily.sales.sales.forEach((d) => {
        d.commission.sellerId &&
          d.commission.commissions.forEach((c) => {
            const alreadySaved = commissionGroup.find(
              (com) => com.sellerId === Number(d.commission.sellerId)
            );

            if (alreadySaved) {
              commissionGroup = commissionGroup.map((cg) => {
                if (cg.sellerId === Number(d.commission.sellerId)) {
                  return {
                    sellerId: Number(d.commission.sellerId),
                    value: cg.value + c.value,
                  };
                }

                return cg;
              });
            } else {
              commissionGroup.push({
                sellerId: Number(d.commission.sellerId),
                value: c.value,
              });
            }
          });
      });

      setCommissions(commissionGroup);
    }

    loadCommissions();
  }, []);

  return (
    <Layout title="Comissões" hasGoBack>
      <Container>
        <FlatList
          data={commissions}
          keyExtractor={(item) => String(item.sellerId)}
          renderItem={({ item }) => (
            <Commission>
              <SellerName>{getSellerName(item.sellerId)}</SellerName>
              <SellerValue>{numberToMoneyTemplate(item.value)}</SellerValue>
            </Commission>
          )}
          ListEmptyComponent={() => (
            <EmptyListText text="Nenhuma comissão cadastrada" />
          )}
        />
      </Container>
    </Layout>
  );
}

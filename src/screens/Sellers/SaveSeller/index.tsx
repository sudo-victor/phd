import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Keyboard } from "react-native";

import Layout from "../../../components/Layout";
import TextInput from "../../../components/Inputs/TextInput";
import MoneyInput from "../../../components/Inputs/MoneyInput";
import SelectInput from "../../../components/Inputs/SelectInput";
import SubmittingButton from "../../../components/SubmittingButton";

import {
  CommissionsContainer,
  FieldWrapper,
  Form,
  Commissions,
  FormWrapper,
} from "./styles";
import { sellerScreensProps } from "../../../routes/SellersRoutes";
import {
  moneyTemplateToNumber,
  numberToMoneyTemplate,
} from "../../../helpers/dataFormatting";
import { ICommission, ISeller } from "../../../types/Seller";
import Reducers from "../../../types/Reducers";
import { IOption } from "../../../types/Input";
import Commission from "../../../components/Commission";

const initialSeller = {
  name: "",
  commissions: [],
};

const initialCommission = {
  productId: null,
  commission: 0,
};

const initialOption: IOption = { name: "Selecione", id: null };

const SaveSeller = ({ route }) => {
  const navigation = useNavigation<sellerScreensProps>();
  const products = useSelector((state: Reducers) => state.product);
  const dispatch = useDispatch();

  const [seller, setSeller] = useState<ISeller>(initialSeller);
  const [currentCommission, setCurrentCommission] =
    useState<ICommission>(initialCommission);
  const [commissionGroup, setCommissionGroup] = useState<ICommission[]>([]);
  const [options, setOptions] = useState<IOption[]>([]);

  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [commissionIsEnable, setCommissionIsEnable] = useState(false);
  const [sellerIsEnable, setSellerIsEnable] = useState(false);

  useEffect(() => {
    function loadSellerIfExists() {
      if (route.params) {
        setSeller(route.params.seller);
        setCommissionGroup(route.params.seller.commissions);
      }
    }

    function loadOptions() {
      const optionGroup = [initialOption, ...products] as IOption[];
      setOptions(optionGroup);
    }

    loadOptions();
    loadSellerIfExists();
  }, []);

  useEffect(() => {
    function activeCommissionButtonIfValide() {
      setCommissionIsEnable(validateCommission());
    }

    activeCommissionButtonIfValide();
  }, [currentCommission]);

  useEffect(() => {
    function activeSellerButtonIfValide() {
      setSellerIsEnable(validateSeller());
    }

    activeSellerButtonIfValide();
  }, [seller]);

  const handleSubmit = (): void => {
    if (alreadySubmitted) return;
    setAlreadySubmitted(true);

    const newSeller: ISeller = getDataSeller();

    dispatch({
      type: seller.id ? "UPDATE_SELLER" : "ADD_SELLER",
      payload: { seller: newSeller },
    });

    navigation.goBack();

    Keyboard.dismiss();
    setSeller(initialSeller);
  };

  const handleAddCommission = (): void => {
    let isUpdate = false;

    const commissionGroupAltered = commissionGroup.map((commission) => {
      if (commission.productId === currentCommission.productId) {
        isUpdate = true;
        commission.commission += moneyTemplateToNumber(
          String(currentCommission.commission)
        );
      }

      return commission;
    });

    if (isUpdate) {
      setCommissionGroup(commissionGroupAltered);
    } else {
      let newCurrent = currentCommission;
      newCurrent.id = Math.random();
      newCurrent.commission = moneyTemplateToNumber(
        String(newCurrent.commission)
      );

      setCommissionGroup([...commissionGroup, newCurrent]);
    }

    setCurrentCommission(initialCommission);
  };

  const handleDeleteCommission = (id: string | number) => {
    const commissionFiltered = commissionGroup.filter(
      (commission: ICommission) => commission.id !== id
    );

    setCommissionGroup(commissionFiltered);
  };

  const validateSeller = (): boolean => {
    return !!(seller.name !== "");
  };

  const validateCommission = (): boolean => {
    return !!(
      currentCommission.commission !== 0 && currentCommission.productId !== null
    );
  };

  const getDataSeller = () => {
    return {
      id: seller.id ? seller.id : Math.random(),
      name: seller.name,
      commissions: commissionGroup,
    };
  };

  const getNameSeller = (id): string => {
    return products.find((product) => product.id === id).name;
  };

  const getItemFormatted = (item) => {
    return {
      ...item,
      productName: getNameSeller(item.productId),
      commission: numberToMoneyTemplate(item.commission),
    };
  };

  return (
    <Layout
      title={seller.id ? "Editar Vendedor" : "Adicionar Vendedor"}
      hasGoBack
    >
      <Form
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      >
        <FormWrapper>
          <TextInput
            label="Nome"
            value={seller.name}
            onChangeText={(value: string) =>
              setSeller({ ...seller, name: value })
            }
          />

          <CommissionsContainer>
            <FieldWrapper>
              <SelectInput
                label="Produto"
                selectedValue={currentCommission.productId}
                onValueChange={(productId) =>
                  setCurrentCommission({
                    ...currentCommission,
                    productId: Number(productId),
                  })
                }
                valueGroup={options}
              />
            </FieldWrapper>

            <FieldWrapper>
              <MoneyInput
                label="Comissão"
                value={String(currentCommission.commission)}
                onChangeText={(value) =>
                  setCurrentCommission({
                    ...currentCommission,
                    commission: Number(value),
                  })
                }
              />
            </FieldWrapper>
          </CommissionsContainer>
          <SubmittingButton
            enabled={commissionIsEnable}
            onPress={handleAddCommission}
            text="Adicionar Comissão"
          />

          <Commissions>
            {commissionGroup.map((item) => (
              <Commission
                item={getItemFormatted(item)}
                handleDeleteCommission={handleDeleteCommission}
              />
            ))}
          </Commissions>
        </FormWrapper>

        <SubmittingButton
          enabled={sellerIsEnable}
          onPress={handleSubmit}
          text="Salvar Vendedor"
        />
      </Form>
    </Layout>
  );
};

export default SaveSeller;

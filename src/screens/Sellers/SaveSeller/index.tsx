import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Keyboard } from "react-native";

import Layout from "../../../components/Layout";
import TextInput from "../../../components/Inputs/TextInput";
import MoneyInput from "../../../components/Inputs/MoneyInput";
import SelectInput from "../../../components/Inputs/SelectInput";
import SubmittingButton from "../../../components/SubmittingButton";
import Commission from "../../../components/Commission";

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

const initialOption: IOption = { name: "Selecione", id: null };

const SaveSeller = ({ route }) => {
  const navigation = useNavigation<sellerScreensProps>();
  const products = useSelector((state: Reducers) => state.product);
  const dispatch = useDispatch();

  const [sellerId, setSellerId] = useState(null);
  const [name, setName] = useState("");
  const [currentProductId, setCurrentProductId] = useState(null);
  const [currentCommission, setCurrentCommission] = useState("0");

  const [commissionGroup, setCommissionGroup] = useState<ICommission[]>([]);
  const [options, setOptions] = useState<IOption[]>([]);

  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [commissionIsEnable, setCommissionIsEnable] = useState(false);
  const [sellerIsEnable, setSellerIsEnable] = useState(false);

  useEffect(() => {
    function loadSellerIfExists() {
      if (route.params) {
        setSellerId(route.params.seller.id);
        setName(route.params.seller.name);
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
  }, [name]);

  const handleSubmit = (): void => {
    if (alreadySubmitted) return;
    setAlreadySubmitted(true);

    const newSeller: ISeller = getDataSeller();

    dispatch({
      type: sellerId ? "UPDATE_SELLER" : "ADD_SELLER",
      payload: { seller: newSeller },
    });

    navigation.goBack();

    Keyboard.dismiss();
    setSellerId(0);
    setName("");
    setCommissionGroup([]);
  };

  const handleAddCommission = (): void => {
    let isUpdate = false;

    const commissionGroupAltered = commissionGroup.map((commission) => {
      if (commission.productId === currentProductId) {
        isUpdate = true;
        commission.commission += moneyTemplateToNumber(currentCommission);
      }

      return commission;
    });

    if (isUpdate) {
      setCommissionGroup(commissionGroupAltered);
    } else {
      let newCurrent: ICommission = {
        commission: moneyTemplateToNumber(currentCommission),
        productId: currentProductId,
      };
      newCurrent.id = Math.random();

      setCommissionGroup([...commissionGroup, newCurrent]);
    }

    setCurrentCommission("");
    setCurrentProductId(null);
  };

  const handleDeleteCommission = (id: string | number) => {
    const commissionFiltered = commissionGroup.filter(
      (commission: ICommission) => commission.id !== id
    );

    setCommissionGroup(commissionFiltered);
  };

  const validateSeller = (): boolean => {
    return !!(name !== "");
  };

  const validateCommission = (): boolean => {
    return !!(Number(currentCommission) !== 0 && currentProductId !== null);
  };

  const getDataSeller = () => {
    return {
      id: sellerId ? sellerId : Math.random(),
      name: name,
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
      title={sellerId ? "Editar Vendedor" : "Adicionar Vendedor"}
      hasGoBack
    >
      <Form
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      >
        <FormWrapper>
          <TextInput
            label="Nome"
            placeholder="Ex: Pedro"
            value={name}
            onChangeText={setName}
          />

          <CommissionsContainer>
            <FieldWrapper>
              <SelectInput
                label="Produto"
                selectedValue={currentProductId}
                onValueChange={(productId) => setCurrentProductId(productId)}
                valueGroup={options}
              />
            </FieldWrapper>

            <FieldWrapper>
              <MoneyInput
                label="Comissão"
                value={currentCommission}
                onChangeText={setCurrentCommission}
                placeholder="R$ 00,00"
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
                key={item.id}
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

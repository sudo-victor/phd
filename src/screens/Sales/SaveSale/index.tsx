import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";

import MoneyInput from "../../../components/Inputs/MoneyInput";
import SelectInput from "../../../components/Inputs/SelectInput";
import Textarea from "../../../components/Inputs/Textarea";
import TextInput from "../../../components/Inputs/TextInput";
import Layout from "../../../components/Layout";
import ProductCard from "../../../components/ProductCard";
import SubmittingButton from "../../../components/SubmittingButton";
import H2 from "../../../components/Titles/H2";

import {
  numberToMoneyTemplateWithoutDollar,
  moneyTemplateToNumber,
  numberToMoneyTemplate,
} from "../../../helpers/dataFormatting";
import { useDaily } from "../../../hooks/daily";
import { dailyScreensProps } from "../../../routes/DailyRoutes";
import { IProduct, ICommission, ISale } from "../../../types/Daily";
import { IOption } from "../../../types/Input";
import Reducers from "../../../types/Reducers";

import {
  Container,
  WrapperHorizontal,
  WrapperVertical,
  FieldWrapper,
  InfoContainer,
  Info,
  InfoTitle,
  InfoValueWrapper,
  InfoDollarSign,
  InfoValue,
} from "./styles";

const initialOption: IOption = { name: "Selecione", id: null };

const paymentTypes = [
  initialOption,
  { name: "Cartão", id: 1, key: "card" },
  { name: "Dinheiro", id: 2, key: "money" },
];

const SaveSale = ({ route }) => {
  const navigation = useNavigation<dailyScreensProps>();
  const products = useSelector((state: Reducers) => state.product);
  const sellers = useSelector((state: Reducers) => state.seller);
  const dispatch = useDispatch();
  const { daily } = useDaily();

  const [options, setOptions] = useState([]);
  const [sellerOptions, setSellerOptions] = useState([]);
  const [optionsPayment, setOptionsPayment] = useState<IOption[]>(paymentTypes);
  const [currentOptionPayment, setCurrentOptionPayment] = useState(null);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [currentSeller, setCurrentSeller] = useState(null);

  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("0");
  const [annotation, setAnnotation] = useState("");
  const [productGroup, setProductGroup] = useState<IProduct[]>([]);
  const [commissionGroup, setCommissionGroup] = useState<ICommission[]>([]);

  const [productIsEnable, setProductIsEnable] = useState(false);
  const [saleIsEnable, setSaleIsEnable] = useState(false);

  const [commission, setCommission] = useState(0);
  const [total, setTotal] = useState(0);

  const [saleId, setSaleId] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);

  function handleAddProduct() {
    if (!currentProductId || Number(amount) <= 0) return;

    let data = {
      id: Math.random(),
      amount: Number(amount),
      productId: currentProductId,
      total:
        products.find((p) => p.id === currentProductId).salePrice *
        Number(amount),
    };

    const productGroupByState = productGroup;

    let productGroupUpdated = [...productGroupByState, data];

    const alreadyExists = productGroupByState.find(
      (p) => p.productId === currentProductId
    );
    const amountJoined = alreadyExists && alreadyExists.amount + Number(amount);
    if (alreadyExists) {
      data = {
        ...data,
        id: alreadyExists.id,
        amount: amountJoined,
        total:
          products.find((p) => p.id === currentProductId).salePrice *
          amountJoined,
      };

      productGroupUpdated = productGroupByState.map((p) => {
        if (p.id === alreadyExists.id) {
          return data;
        }
        return p;
      });
    }

    setProductGroup(productGroupUpdated);
    setAmount("");
    setCurrentProductId(null);
  }

  function handleRemoveProduct(id: number) {
    setProductGroup((state) => state.filter((product) => product.id !== id));
  }

  function handleSubmit() {
    if (productGroup.length === 0 || currentOptionPayment === null) return;

    const data = {
      id: saleId ? saleId : Math.random(),
      createdAt: createdAt ? createdAt : new Date(),
      products: productGroup,
      annotation,
      saleType:
        paymentTypes.find(
          (paymentType) => paymentType.id === currentOptionPayment
        ).key || "teste",
      discount: moneyTemplateToNumber(discount),
      total,
      commission: {
        sellerId: currentSeller,
        commissions: commissionGroup,
      },
    };

    dispatch({
      type: saleId ? "UPDATE_SALE" : "ADD_SALE",
      payload: { sale: data, idDaily: daily.id },
    });

    Keyboard.dismiss();
    navigation.goBack();
  }

  useEffect(() => {
    function loadOptions() {
      const optionGroup = [initialOption, ...products] as IOption[];
      const sellerOptionGroup = [initialOption, ...sellers] as IOption[];
      setOptions(optionGroup);
      setSellerOptions(sellerOptionGroup);
    }

    function loadSale() {
      if (route.params) {
        const sale = route.params.sale as ISale;
        setSaleId(sale.id);
        setProductGroup(sale.products);
        setAnnotation(sale.annotation);
        setCurrentOptionPayment(
          paymentTypes.find((p) => p.key === sale.saleType).id
        );
        setCurrentSeller(sale.commission.sellerId);
        setDiscount(numberToMoneyTemplate(sale.discount));
        setCreatedAt(sale.createdAt);
      }
    }

    loadOptions();
    loadSale();
  }, []);

  useEffect(() => {
    function enableAddProduct() {
      Number(amount) <= 0 || !currentProductId
        ? setProductIsEnable(false)
        : setProductIsEnable(true);
    }

    enableAddProduct();
  }, [amount, currentProductId]);

  useEffect(() => {
    function enableAddSale() {
      productGroup.length === 0 || currentOptionPayment === null
        ? setSaleIsEnable(false)
        : setSaleIsEnable(true);
    }

    enableAddSale();
  }, [productGroup, currentOptionPayment]);

  useEffect(() => {
    function calculateTotalAndComission() {
      let calcTotal = 0;
      let calcCommission = 0;
      let commissions = [];

      productGroup.forEach((p) => {
        calcTotal += p.total;

        sellers.forEach((seller) => {
          if (seller.id === currentSeller) {
            seller.commissions.forEach((c) => {
              if (c.productId === p.productId) {
                calcCommission += c.commission * p.amount;
                commissions.push({
                  productId: p.productId,
                  value: c.commission * p.amount,
                });
              }
            });
          }
        });
      });

      calcTotal -= moneyTemplateToNumber(discount);

      setTotal(calcTotal || 0);
      setCommission(calcCommission || 0);
      setCommissionGroup(commissions);
    }

    calculateTotalAndComission();
  }, [productGroup, currentSeller, discount]);

  return (
    <Layout title="Adicionar Venda" hasGoBack>
      <Container>
        <WrapperVertical>
          <H2>Produto(s)</H2>
          <WrapperHorizontal>
            <FieldWrapper>
              <TextInput
                label="Qtd"
                value={amount}
                onChangeText={setAmount}
                placeholder="0"
                keyboardType="number-pad"
              />
            </FieldWrapper>

            <FieldWrapper>
              <SelectInput
                label="Produto"
                selectedValue={currentProductId}
                onValueChange={(productId) => setCurrentProductId(productId)}
                valueGroup={options}
              />
            </FieldWrapper>
          </WrapperHorizontal>

          <SubmittingButton
            style={{ marginBottom: 16 }}
            text="Adicionar Produto"
            enabled={productIsEnable}
            onPress={handleAddProduct}
          />

          {productGroup.map((product) => (
            <ProductCard
              key={product.id}
              item={product}
              handleDeleteProduct={handleRemoveProduct}
            />
          ))}
          <Textarea
            label="Anotações (opcional)"
            placeholder="Informe uma anotação..."
            value={annotation}
            onChangeText={setAnnotation}
          />
        </WrapperVertical>

        <WrapperVertical>
          <H2>Opções de Venda</H2>

          <SelectInput
            label="Tipo de Pagamento"
            selectedValue={currentOptionPayment}
            onValueChange={(value) => setCurrentOptionPayment(value)}
            valueGroup={optionsPayment}
          />

          <WrapperHorizontal>
            <FieldWrapper>
              <SelectInput
                label="Vendedor"
                selectedValue={currentSeller}
                onValueChange={(sellerId) => setCurrentSeller(sellerId)}
                valueGroup={sellerOptions}
              />
            </FieldWrapper>
            <FieldWrapper>
              <MoneyInput
                label="Desconto"
                value={discount}
                onChangeText={setDiscount}
              />
            </FieldWrapper>
          </WrapperHorizontal>

          <InfoContainer>
            <Info>
              <InfoTitle>Comissão</InfoTitle>
              <InfoValueWrapper>
                <InfoDollarSign>R$</InfoDollarSign>
                <InfoValue>
                  {numberToMoneyTemplateWithoutDollar(commission)}
                </InfoValue>
              </InfoValueWrapper>
            </Info>

            <Info style={{ marginTop: 10 }}>
              <InfoTitle>Total</InfoTitle>
              <InfoValueWrapper>
                <InfoDollarSign>R$</InfoDollarSign>
                <InfoValue>
                  {numberToMoneyTemplateWithoutDollar(total)}
                </InfoValue>
              </InfoValueWrapper>
            </Info>
          </InfoContainer>

          <SubmittingButton
            text="Cadastrar Venda"
            enabled={saleIsEnable}
            onPress={handleSubmit}
          />
        </WrapperVertical>
      </Container>
    </Layout>
  );
};

export default SaveSale;

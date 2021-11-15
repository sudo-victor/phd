import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoneyInput from "../../../components/Inputs/MoneyInput";
import SelectInput from "../../../components/Inputs/SelectInput";
import Textarea from "../../../components/Inputs/Textarea";

import TextInput from "../../../components/Inputs/TextInput";
import Layout from "../../../components/Layout";
import SubmittingButton from "../../../components/SubmittingButton";
import H2 from "../../../components/Titles/H2";
import { IOption } from "../../../types/Input";
import Reducers from "../../../types/Reducers";

import {
  Container,
  WrapperHorizontal,
  WrapperVertical,
  FieldWrapper,
} from "./styles";

const initialOption: IOption = { name: "Selecione", id: null };

const paymentTypes = [
  initialOption,
  { name: "Cartão", id: 1, key: "card" },
  { name: "Dinheiro", id: 2, key: "money" },
];

const SaveSale = () => {
  const products = useSelector((state: Reducers) => state.product);
  const sellers = useSelector((state: Reducers) => state.seller);
  const [options, setOptions] = useState([]);
  const [sellerOptions, setSellerOptions] = useState([]);
  const [optionsPayment, setOptionsPayment] = useState<IOption[]>(paymentTypes);
  const [currentOptionPayment, setCurrentOptionPayment] = useState(null);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [currentSeller, setCurrentSeller] = useState(null);

  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    function loadOptions() {
      const optionGroup = [initialOption, ...products] as IOption[];
      const sellerOptionGroup = [initialOption, ...sellers] as IOption[];
      setOptions(optionGroup);
      setSellerOptions(sellerOptionGroup);
    }

    loadOptions();
  }, []);

  return (
    <Layout title="Adicionar Venda" hasGoBack>
      <Container>
        <WrapperVertical>
          <H2>Produto(s)</H2>
          <WrapperHorizontal>
            <FieldWrapper>
              <TextInput label="Qtd" placeholder="0" />
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
          />

          <Textarea
            label="Anotações (opcional)"
            placeholder="Informe uma anotação..."
            value={description}
            onChangeText={setDescription}
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
                label="Vendedor (opcional)"
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

          <SubmittingButton text="Cadastrar Venda" />
        </WrapperVertical>
      </Container>
    </Layout>
  );
};

export default SaveSale;

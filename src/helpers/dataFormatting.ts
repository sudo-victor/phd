export const moneyTemplateToNumber = (value: string): number => {
  return Number(String(value).replace("R$", "").replace(",", "."));
};

export const numberToMoneyTemplate = (value: number): string => {
  return `R$${value.toFixed(2).replace(".", ",")}`;
  // return new Intl.NumberFormat("pt-BR", {
  //   style: "currency",
  //   currency: "BRL",
  // }).format(value);
};

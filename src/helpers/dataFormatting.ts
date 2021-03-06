export const moneyTemplateToNumber = (value: string): number => {
  return Number(String(value).replace("R$", "").replace(",", "."));
};

export const numberToMoneyTemplate = (value: number): string => {
  return `R$${value.toFixed(2).replace(".", ",")}`;
};

export const numberToMoneyTemplateWithoutDollar = (value: number): string => {
  return `${value.toFixed(2).replace(".", ",")}`;
};

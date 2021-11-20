export interface IDaily {
  id?: number;
  createdAt: Date;
  sales?: ISaleWrapper;
  spents?: ISpentWrapper;
}

export interface ISaleWrapper {
  total: number;
  cashTotal: number;
  cardTotal: number;
  sales: ISale[];
}

export interface ISale {
  id?: number;
  createdAt: Date;
  products: IProduct[];
  annotation: string;
  saleType: "card" | "money";
  discount: number;
  total: number;
  commission: ICommissionWrapper;
}

export interface IProduct {
  id?: number;
  amount: number;
  productId: number;
  total: number;
}

export interface ICommissionWrapper {
  sellerId: string;
  commissions: ICommission[];
}

export interface ICommission {
  productId: string;
  value: number;
}

export interface ISpentWrapper {
  total: number;
  spents: ISpent[];
}

export interface ISpent {
  id?: number;
  createdAt: Date;
  name: string;
  amount: number;
  total: number;
}

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
  note: string;
  saleType: string;
  discount: number;
}

export interface IProduct {
  id?: number;
  amount: number;
  productId: number;
}

export interface ISpentWrapper {
  total: number;
  spents: ISpent;
}

export interface ISpent {
  id?: number;
  createdAt: Date;
  name: string;
  price: number;
}

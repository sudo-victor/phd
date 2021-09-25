export interface ISeller {
  id?: number;
  name: string;
  commissions: ICommission[];
}

export interface ICommission {
  id?: number;
  productId: number;
  commission: number;
}

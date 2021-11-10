import { IDaily } from "./Daily";
import IProduct from "./Product";
import { ISeller } from "./Seller";

export default interface IReducers {
  product: IProduct[];
  seller: ISeller[];
  daily: IDaily[];
}

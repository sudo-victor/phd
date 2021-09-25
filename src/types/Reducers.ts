import Product from "./Product";
import { Seller } from "./Seller";

export default interface IReducers {
  product: Product[];
  seller: Seller[];
}

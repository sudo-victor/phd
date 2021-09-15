/* eslint-disable indent */

import Product from "../../types/Product";

interface Action {
  type: string;
  payload: {
    product: Product;
  };
}

let newProduct: Product;
let newState: Product[];
let id: number;

export default function product(state: Product[] = [], action: Action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      newProduct = action.payload.product;

      return [...state, newProduct];

    case "REMOVE_PRODUCT":
      id = action.payload.product.id;
      newState = state.filter((product) => product.id !== id);

      return [...newState];

    case "UPDATE_PRODUCT":
      id = action.payload.product.id;
      newState = state.map((product) => {
        if (product.id === id) {
          product = action.payload.product;
        }
        return product;
      });

      return [...newState];

    default:
      return state;
  }
}

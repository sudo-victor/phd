/* eslint-disable indent */

import { ISeller } from "../../types/Seller";

interface Action {
  type: string;
  payload: {
    seller: ISeller;
  };
}

let newSeller: ISeller;
let newState: ISeller[];
let id: number;

export default function seller(state: ISeller[] = [], action: Action) {
  switch (action.type) {
    case "ADD_SELLER":
      newSeller = action.payload.seller;

      return [...state, newSeller];

    case "REMOVE_SELLER":
      id = action.payload.seller.id;
      newState = state.filter((seller) => seller.id !== id);

      return [...newState];

    case "UPDATE_SELLER":
      id = action.payload.seller.id;
      newState = state.map((seller) => {
        if (seller.id === id) {
          seller = action.payload.seller;
        }
        return seller;
      });

      return [...newState];

    default:
      return state;
  }
}

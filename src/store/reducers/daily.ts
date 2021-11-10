/* eslint-disable indent */

import { IDaily } from "../../types/Daily";

interface Action {
  type: string;
  payload: {
    daily: IDaily;
  };
}

let newDaily: IDaily;
let newState: IDaily[];
let id: number;

export default function daily(state: IDaily[] = [], action: Action) {
  switch (action.type) {
    case "ADD_DAILY":
      newDaily = action.payload.daily;

      return [...state, newDaily];

    case "REMOVE_DAILY":
      id = action.payload.daily.id;
      newState = state.filter((daily) => daily.id !== id);

      return [...newState];

    case "UPDATE_DAILY":
      id = action.payload.daily.id;
      newState = state.map((daily) => {
        if (daily.id === id) {
          daily = action.payload.daily;
        }
        return daily;
      });

      return [...newState];

    default:
      return state;
  }
}

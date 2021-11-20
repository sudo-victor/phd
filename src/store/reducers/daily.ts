/* eslint-disable indent */

import { IDaily, ISale, ISpent } from "../../types/Daily";

interface Action {
  type: string;
  payload: {
    idDaily: number;
    daily: IDaily;
    sale: ISale;
    spent: ISpent;
  };
}

let newDaily: IDaily;
let idDaily: number;
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

    case "ADD_SALE":
      idDaily = action.payload.idDaily;

      newState = state.map((daily) => {
        if (daily.id === idDaily) {
          daily.sales.sales.push(action.payload.sale);

          if (action.payload.sale.saleType === "money") {
            daily.sales.cashTotal += action.payload.sale.total;
          } else {
            daily.sales.cardTotal += action.payload.sale.total;
          }

          daily.sales.total += action.payload.sale.total;
        }
        return daily;
      });

      return [...newState];

    case "REMOVE_SALE":
      idDaily = action.payload.idDaily;

      newState = state.map((daily) => {
        if (daily.id === idDaily) {
          if (action.payload.sale.saleType === "money") {
            daily.sales.cashTotal -= action.payload.sale.total;
          } else {
            daily.sales.cardTotal -= action.payload.sale.total;
          }
          daily.sales.total -= action.payload.sale.total;

          daily.sales.sales = daily.sales.sales.filter(
            (s) => s.id !== action.payload.sale.id
          );
        }
        return daily;
      });

      return [...newState];

    case "UPDATE_SALE":
      idDaily = action.payload.idDaily;

      newState = state.map((daily) => {
        if (daily.id === idDaily) {
          daily.sales.sales = daily.sales.sales.map((s) => {
            if (s.id === action.payload.sale.id) {
              if (action.payload.sale.saleType === "money") {
                daily.sales.cashTotal -= s.total;
                daily.sales.cashTotal += action.payload.sale.total;
              } else {
                daily.sales.cardTotal -= s.total;
                daily.sales.cardTotal += action.payload.sale.total;
              }

              daily.sales.total -= s.total;
              daily.sales.total += action.payload.sale.total;

              return action.payload.sale;
            }

            return s;
          });
        }
        return daily;
      });

      return [...newState];

    case "ADD_SPENT":
      idDaily = action.payload.idDaily;

      newState = state.map((daily) => {
        if (daily.id === idDaily) {
          daily.spents.spents.push(action.payload.spent);

          daily.spents.total += action.payload.spent.total;
        }
        return daily;
      });

      return [...newState];

    case "REMOVE_SPENT":
      idDaily = action.payload.idDaily;

      newState = state.map((daily) => {
        if (daily.id === idDaily) {
          daily.spents.total -= action.payload.spent.total;

          daily.spents.spents = daily.spents.spents.filter(
            (s) => s.id !== action.payload.spent.id
          );
        }
        return daily;
      });

      return [...newState];

    case "UPDATE_SPENT":
      idDaily = action.payload.idDaily;

      newState = state.map((daily) => {
        if (daily.id === idDaily) {
          daily.spents.spents = daily.spents.spents.map((s) => {
            if (s.id === action.payload.spent.id) {
              daily.spents.total -= s.total;
              daily.spents.total += action.payload.spent.total;

              return action.payload.spent;
            }

            return s;
          });
        }
        return daily;
      });

      return [...newState];

    default:
      return state;
  }
}

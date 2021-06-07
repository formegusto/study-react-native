import { Action, ActionCreator, ActionCreatorsMapObject } from "redux";
import { DECREMENT, INCREMENT } from "./types";

export interface CounterAction
  extends Action<typeof INCREMENT | typeof DECREMENT> {}

export const counterActionCreator: ActionCreatorsMapObject<CounterAction> = {
  increase: () => ({ type: INCREMENT }),
  decrease: () => ({ type: DECREMENT }),
};

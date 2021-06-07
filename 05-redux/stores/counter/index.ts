import { CounterAction } from "./actions";
import { DECREMENT, INCREMENT } from "./types";

type CounterStore = {
  number: number;
};

const counterStore: CounterStore = {
  number: 0,
};

export default function CounterReducer(
  state = counterStore,
  action: CounterAction
): CounterStore {
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1,
      };
    case DECREMENT:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

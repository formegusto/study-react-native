import { combineReducers } from "redux";
import counter from "./counter";

const rootStore = combineReducers({
  counter,
});

export type RootStore = ReturnType<typeof rootStore>;

export default rootStore;

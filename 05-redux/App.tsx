import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CounterContainer from "./containers/CounterContainer";
import rootStore from "./stores";

const store = createStore(rootStore);

function App() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}

export default App;

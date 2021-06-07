import React from "react";
import CounterContainer from "./containers/CounterContainer";
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <CounterProvider>
      <CounterContainer />
    </CounterProvider>
  );
}

export default App;

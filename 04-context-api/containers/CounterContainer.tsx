import React from "react";
import CounterComponent from "../components/CounterComponent";
import { CounterProvider } from "../context/CounterContext";

function CounterContainer() {
  return (
    <CounterProvider>
      <CounterComponent />
    </CounterProvider>
  );
}

export default CounterContainer;

import React, { useContext } from "react";
import CounterComponent from "../components/CounterComponent";
import CounterContext from "../context/CounterContext";

function CounterContainer() {
  const { state, action } = useContext(CounterContext);
  return <CounterComponent {...state} {...action} />;
}

export default CounterContainer;

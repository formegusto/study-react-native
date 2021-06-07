import React from "react";
import { ConnectedProps } from "react-redux";
import CounterComponent from "../components/CounterComponent";
import CounterConnector from "../stores/counter/connector";

type Props = ConnectedProps<typeof CounterConnector>;

function CounterContainer(props: Props) {
  return (
    <CounterComponent
      increase={props.increase}
      decrease={props.decrease}
      {...props}
    />
  );
}

export default CounterConnector(CounterContainer);

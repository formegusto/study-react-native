import React, { createContext, useCallback, useState } from "react";

export type CounterType = {
  state: {
    number: number;
  };
  action: {
    increase: () => void;
    decrease: () => void;
  };
};

const CounterContext = createContext<CounterType>({
  state: {
    number: 0,
  },
  action: {
    increase: () => {},
    decrease: () => {},
  },
});

function CounterProvider({ children }: React.PropsWithChildren<{}>) {
  const [number, setNumber] = useState<number>(0);

  const value: CounterType = {
    state: { number },
    action: {
      increase: useCallback(() => {
        setNumber((n) => n + 1);
      }, []),
      decrease: useCallback(() => {
        setNumber((n) => n - 1);
      }, []),
    },
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

const { Consumer: CounterConsumer } = CounterContext;

export { CounterConsumer, CounterProvider };
export default CounterContext;

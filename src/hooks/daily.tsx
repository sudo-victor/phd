import React, { useState, createContext, ReactNode, useContext } from "react";

import { IDaily } from "../types/Daily";

export interface Props {
  children: ReactNode;
}

export interface DailyContextProps {
  daily: IDaily;
  handleUpdateDaily: (item: IDaily) => void;
}

export const DailyContext = createContext({} as DailyContextProps);

export const DailyProvider = ({ children }: Props) => {
  const [daily, setDaily] = useState<IDaily>(null);

  function handleUpdateDaily(item: IDaily) {
    setDaily(item);
  }

  return (
    <DailyContext.Provider value={{ daily, handleUpdateDaily }}>
      {children}
    </DailyContext.Provider>
  );
};

export const useDaily = () => {
  return useContext(DailyContext);
};

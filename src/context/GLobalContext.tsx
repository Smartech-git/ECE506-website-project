"use client";

import React, { createContext, useContext, useState } from "react";
import { GlobalContextTypes } from "@/types";
const GlobalContext = createContext<GlobalContextTypes>({
  cart: undefined,
  setCart: () => {},
});

export default function AppProvider({ children }: any) {
  const [cart, setCart] = useState<any>([]);

  return (
    <GlobalContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobal = () => useContext(GlobalContext);

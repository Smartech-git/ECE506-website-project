"use client";

import React, { createContext, useContext, useState } from "react";
import { GlobalContextTypes } from "@/types";
const GlobalContext = createContext<GlobalContextTypes>({
  cart: undefined,
  setCart: () => {},
  toast: { open: false, state: undefined, content: undefined },
  setToast: () => {},
});

export default function AppProvider({ children }: any) {
  const [cart, setCart] = useState<any>([]);
  const [toast, setToast] = useState<toastTypes>({
    open: false,
    state: undefined,
    content: undefined,
  });

  return (
    <GlobalContext.Provider
      value={{
        cart,
        setCart,
        toast,
        setToast,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobal = () => useContext(GlobalContext);

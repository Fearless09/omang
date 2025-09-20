"use client";

import { createContext, useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Context = createContext<{} | undefined>(undefined);

const ContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

const UseContextProvider = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("UseContextProvider must be used within a ContextProvider");
  }
  return context;
};

export { ContextProvider, UseContextProvider };

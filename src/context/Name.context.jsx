import { createContext, useContext } from "react";

const NameContext = createContext("John");
export const NameContextProvider = NameContext.Provider;
export const useNameContextValue = () => useContext(NameContext);

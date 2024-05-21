"use client";

import { createContext, useState } from "react";

export const HomeContext = createContext();

export default function HomeContextProvider({ children }) {
  const [seeValue, setSeeValue] = useState(true);

  return (
    <HomeContext.Provider value={{ seeValue, setSeeValue }}>
      {children}
    </HomeContext.Provider>
  );
}

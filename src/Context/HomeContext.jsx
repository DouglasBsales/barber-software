"use client";

import { createContext, useState } from "react";

export const HomeContext = createContext();

export default function HomeContextProvider({ children }) {
  const [seeValue, setSeeValue] = useState(true);
  const [page, setPage] = useState("Home");

  return (
    <HomeContext.Provider value={{ seeValue, setSeeValue, page, setPage }}>
      {children}
    </HomeContext.Provider>
  );
}

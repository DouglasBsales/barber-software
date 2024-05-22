"use client";

import { createContext, useState } from "react";

export const HomeContext = createContext();

export default function HomeContextProvider({ children }) {
  const [seeValue, setSeeValue] = useState(true);
  const [initialDay, setInitialDay] = useState(true);
  const [page, setPage] = useState("Home");
  const [modalService, setModalService] = useState(false);

  const [arrayValueTotal, setArrayValueTotal] = useState([]);

  const [arrayRelatorioDia, setArrayRelatorioDia] = useState([])

  return (
    <HomeContext.Provider
      value={{
        seeValue,
        setSeeValue,
        initialDay,
        setInitialDay,
        page,
        setPage,
        modalService,
        setModalService,
        arrayValueTotal,
        arrayRelatorioDia,
        setArrayRelatorioDia
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

"use client";

import { createContext, useState } from "react";

export const HomeContext = createContext();

export default function HomeContextProvider({ children }) {
  const [seeValue, setSeeValue] = useState(true);

  const initialDayValue = () => {

    let initialDay = null

    if(typeof window !== "undefined"){
      initialDay = localStorage.getItem("initialDay");
    }

    if (initialDay) {
      return JSON.parse(initialDay);
    } else {
      return [];
    }
  };

  const [initialDay, setInitialDay] = useState(initialDayValue());
  const [page, setPage] = useState("Home");
  const [modalService, setModalService] = useState(false);

  const [arrayValueTotal, setArrayValueTotal] = useState([]);


  const relatorioDia = () => {

    let day = null

    if(typeof window !== "undefined"){
      day = localStorage.getItem("Servicos_dia");
    }

    if (day) {
      return JSON.parse(day);
    } else {
      return [];
    }
  };
  const [arrayRelatorioDia, setArrayRelatorioDia] = useState(relatorioDia())

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

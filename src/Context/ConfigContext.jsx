"use client";

import { createContext, useState } from "react";

export const ConfigContext = createContext();

export default function ConfigContextProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [dropDown, setDropDown] = useState(false);


  const serviceAdd = () => {

    let service = null

    if(typeof window !== "undefined"){
      service = localStorage.getItem("Servicos_adicionados");
    }

    if (service) {
      return JSON.parse(service);
    } else {
      return [];
    }
  };

  const [arrayAddedService, setArrayAddedService] = useState(serviceAdd());
  const [nameService, setNameService] = useState("");
  const [valueService, setValueService] = useState(0);

  return (
    <ConfigContext.Provider
      value={{
        openModal,
        setOpenModal,
        dropDown,
        setDropDown,
        arrayAddedService,
        setArrayAddedService,
        nameService,
        setNameService,
        valueService,
        setValueService,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

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


  const relatorioCompleto = () => {

    let relatorioCompleto = null

    if(typeof window !== "undefined"){
      relatorioCompleto = localStorage.getItem("Relatorio_Completo");
    }

    if (relatorioCompleto) {
      return JSON.parse(relatorioCompleto);
    } else {
      return [];
    }
  };
  const [arrayRelatorioCompleto, setArrayRelatorioCompleto] = useState(relatorioCompleto());

  const relatorioData = ()=> {
    let relatorio = null

    if(typeof window !== "undefined"){
      relatorio = localStorage.getItem("RelatorioDetalhado");
    } 

    if(relatorio){
      return JSON.parse(relatorio);
    } else {
      return [];
    }
  }

  const [arrayRelatorioData, setArrayRelatorioData] = useState(relatorioData())


  const infoDateDay = () => {

    let infoDate = null

    if(typeof window !== "undefined"){
      infoDate = localStorage.getItem("infoDateInitDay");
    }

    if (infoDate) {
      return JSON.parse(infoDate);
    } else {
      return [];
    }
  };
  const [infoDate, setInfoDate] = useState(infoDateDay());


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
  const [openModalFinishDay, setOpenModalFinishDay] = useState(false)

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
        arrayRelatorioCompleto,
        setArrayRelatorioCompleto,
        arrayRelatorioDia,
        setArrayRelatorioDia,
        arrayRelatorioData,
        setArrayRelatorioData,
        infoDate, 
        setInfoDate,
        openModalFinishDay, 
        setOpenModalFinishDay
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

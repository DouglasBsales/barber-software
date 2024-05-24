"use client";

import Header from "@/Components/Servicos/Header";
import ServiceItens from "@/Components/Servicos/ServiceItens";
import { ConfigContext } from "@/Context/ConfigContext";
import { useContext, useEffect } from "react";

export default function Servicos() {

const {arrayAddedService, setArrayAddedService} = useContext(ConfigContext)
  
  useEffect (() => {
    const storageItem = localStorage.getItem("Servicos_adicionados");
    if (storageItem) {
      setArrayAddedService(JSON.parse(storageItem));
    }
  }, [setArrayAddedService]);

  useEffect(() => {
    localStorage.setItem(
      "Servicos_adicionados",
      JSON.stringify(arrayAddedService)
    );
  }, [arrayAddedService]);

  return (
    <div className="w-full">
      <Header />
      <ServiceItens />
    </div>
  );
}

"use client";

import { HomeContext } from "@/Context/HomeContext";
import { useContext, useEffect, useState } from "react";

import RelatorioDiaVazio from "@/Components/RelatorioDia/RelatorioDiaVazio";
import RelatorioDiaInfo from "@/Components/RelatorioDia/RelatorioDiaInfo";

export default function RelatorioDia() {
  const { arrayRelatorioDia } = useContext(HomeContext);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="max-w-6xl flex flex-col items-center px-8 pt-[80px] ">
      {isClient ? (
        arrayRelatorioDia.length === 0 ? (
          <RelatorioDiaVazio />
        ) : (
          <RelatorioDiaInfo />
        )
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-blackOpacity font-bold text-2xl">Carregando...</p>
        </div>
      )}
    </div>
  );
}

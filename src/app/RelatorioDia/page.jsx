"use client";

import { HomeContext } from "@/Context/HomeContext";
import { useContext } from "react";

import RelatorioDiaVazio from "@/Components/RelatorioDia/RelatorioDiaVazio";
import RelatorioDiaInfo from "@/Components/RelatorioDia/RelatorioDiaInfo";

export default function RelatorioDia() {
  const { arrayRelatorioDia } = useContext(HomeContext);

  return (
    <div className="max-w-6xl flex flex-col items-center px-8 pt-[80px] ">
      {arrayRelatorioDia.length === 0 ? (
        <RelatorioDiaVazio />
      ) : (
        <RelatorioDiaInfo/>
      )}
    </div>
  );
}

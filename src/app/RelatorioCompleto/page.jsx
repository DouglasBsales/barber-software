"use client";

import RelatorioInfo from "@/Components/RelatorioCompleto/RelatorioInfo";
import RelatorioVazio from "@/Components/RelatorioCompleto/RelatorioVazio";
import { HomeContext } from "@/Context/HomeContext";
import { useContext } from "react";

export default function RelatorioCompleto() {
  const { arrayRelatorioCompleto } = useContext(HomeContext);

  return (
    <div className="max-w-6xl flex flex-col items-center px-8 pt-[80px]">
      {arrayRelatorioCompleto.length === 0 ? (
        <RelatorioVazio />
      ) : (
        <RelatorioInfo />
      )}
    </div>
  );
}

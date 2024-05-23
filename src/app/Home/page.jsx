"use client";

import ButtonsDay from "@/Components/Home/ButtonsDay";
import Header from "@/Components/Home/Header";
import InfoValues from "@/Components/Home/InfoValues";

export default function Home() {
  return (
    <div className="max-w-6xl flex flex-col items-center px-8 pt-9">
      <Header />
      <InfoValues />
      <ButtonsDay />
    </div>
  );
}

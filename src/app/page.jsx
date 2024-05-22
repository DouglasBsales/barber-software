"use client";

import ButtonsDay from "@/Components/Home/ButtonsDay";
import Header from "@/Components/Home/Header";
import InfoValues from "@/Components/Home/InfoValues";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-whiteOpacity overflow-x-hidden">
      <div className="max-w-6xl px-8 pt-9">
        <Header />
        <InfoValues />
        <ButtonsDay />
      </div>
    </div>
  );
}

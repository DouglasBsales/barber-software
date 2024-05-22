"use client";

import { useContext } from "react";
import { HomeContext } from "@/Context/HomeContext";
import {
  faClipboardList,
  faGear,
  faHouse,
  faListCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Menu = () => {
  const { page, setPage } = useContext(HomeContext);

  return (
    <div className="w-full h-[64px] flex justify-center items-center bg-white fixed bottom-0 z-10">
      <div className="w-[333px] flex justify-between items-center z-0 ">
        <Link
          href="/Home"
          className="flex flex-col items-center"
          onClick={() => setPage("Home")}
        >
          <FontAwesomeIcon
            icon={faHouse}
            className={`text-2xl ${
              page === "Home" ? "text-blackPrimary" : "text-blackOpacity"
            }`}
          />
          {page === "Home" ? (
            <div className="w-9 border border-blackPrimary relative top-2"></div>
          ) : (
            <div className="w-9 border border-white relative top-2"></div>
          )}
        </Link>

        <Link
          href="#"
          className="flex flex-col items-center relative"
          onClick={() => setPage("RelatorioDia")}
        >
          <FontAwesomeIcon
            icon={faListCheck}
            className={`text-2xl ease-in duration-300 ${
              page === "RelatorioDia"
                ? "text-blackPrimary"
                : "text-blackOpacity"
            }`}
          />
          {page === "RelatorioDia" ? (
            <div className="w-9 border border-blackPrimary relative top-2"></div>
          ) : (
            <div className="w-9 border border-white relative top-2"></div>
          )}
        </Link>

        <div className="relative flex justify-center items-center">
          {page === "Home" && (
            <div className="flex flex-col items-center">
              <div
                className="absolute top-[-72px] w-[80px] h-[80px] flex justify-center items-center"
                style={{ clipPath: 'inset(40px 0 0 0)' }}>
                <div className="w-[80px] h-[80px] flex justify-center items-center bg-whiteOpacity rounded-full"></div>
              </div>
               <button className="w-[61px] h-[61px] flex justify-center items-center bg-bluePrimary rounded-full absolute top-[-62px]">
                  <FontAwesomeIcon icon={faPlus} className="text-white text-xl" />
                </button>
            </div>
          )}
        </div>

        <Link
          href="#"
          className="flex flex-col items-center"
          onClick={() => setPage("RelatorioCompleto")}
        >
          <FontAwesomeIcon
            icon={faClipboardList}
            className={`text-2xl ease-in duration-300 ${
              page === "RelatorioCompleto"
                ? "text-blackPrimary"
                : "text-blackOpacity"
            }`}
          />
          {page === "RelatorioCompleto" ? (
            <div className="w-9 border border-blackPrimary relative top-2"></div>
          ) : (
            <div className="w-9 border border-white relative top-2"></div>
          )}
        </Link>

        <Link
          href="#"
          className="flex flex-col items-center"
          onClick={() => setPage("Configuracoes")}
        >
          <FontAwesomeIcon
            icon={faGear}
            className={`text-2xl ease-in duration-300 ${
              page === "Configuracoes"
                ? "text-blackPrimary"
                : "text-blackOpacity"
            }`}
          />
          {page === "Configuracoes" ? (
            <div className="w-9 border border-blackPrimary relative top-2"></div>
          ) : (
            <div className="w-9 border border-white relative top-2"></div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Menu;

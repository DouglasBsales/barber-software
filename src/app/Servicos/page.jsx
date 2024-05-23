"use client";

import Link from "next/link";
import { useState } from "react";

import {faChevronDown ,faChevronLeft ,faChevronUp ,faCirclePlus ,faShop} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Servicos() {
  const [dropDown, setDropDown] = useState(true);

  return (
    <div className="w-full">
      <div className=" pl-5 pt-5">
        <Link href="/Configuracoes" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faChevronLeft} className="text-blackPrimary" />
          <p className="text-blackPrimary font-semibold">Configurações</p>
        </Link>
      </div>
      <div className="max-w-6xl flex flex-col items-center px-8 pt-[40px]">
        <p className="text-2xl font-bold text-blackOpacity pb-10">Serviços</p>
        <div className="w-[326px] bg-white rounded-md px-5">
          <div className="flex flex-col gap-5 pt-5 pb-5">
            <div className="flex items-center">
              <button className="flex gap-2 items-center outline-none" onClick={()=> setDropDown(!dropDown)}>
                <FontAwesomeIcon
                  icon={faShop}
                  className="text-blackPrimary size-5"
                />
                <p className="text-blackPrimary">Serviços adicionados</p>

                {dropDown ? (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-blackPrimary"
                  />
                ) : (
                  <FontAwesomeIcon icon={faChevronUp} />
                )}
              </button>
            </div>
            <div className="flex justify-between items-center">
              <button className="flex gap-2 items-center outline-none">
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className="text-blackPrimary size-5"
                />
                <p className="text-blackPrimary">Adicionar serviço</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

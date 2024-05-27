"use client";

import Link from "next/link";

import {faChevronRight,faFileInvoiceDollar,faShop,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Configuracoes() {
  return (
    <div className="max-w-6xl flex flex-col items-center px-8 pt-[80px]">
      <p className="text-2xl font-bold text-blackOpacity pb-10">Configurações</p>
      <div className="w-[326px] bg-white rounded-md px-5">
        <div className="flex flex-col gap-5 pt-5 pb-5">
          <Link href="/Servicos" className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faShop} className="text-blackPrimary size-5" />
              <p className="text-blackPrimary">Serviços</p>
            </div>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-blackPrimary"
            />
          </Link>
          <Link href="/Pagamentos" className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faFileInvoiceDollar} className="text-blackPrimary size-5"/>
              <p className="text-blackPrimary">Pagamentos</p>
            </div>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-blackPrimary"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

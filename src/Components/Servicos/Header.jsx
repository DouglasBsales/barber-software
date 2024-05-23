import Link from "next/link";
import React from "react";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className=" pl-5 pt-5">
      <Link href="/Configuracoes" className="flex items-center gap-2">
        <FontAwesomeIcon icon={faChevronLeft} className="text-blackPrimary" />
        <p className="text-blackPrimary font-semibold">Configurações</p>
      </Link>
    </div>
  );
};

export default Header;

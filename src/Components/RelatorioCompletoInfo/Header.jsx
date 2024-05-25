import Link from "next/link";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className=" pl-5 pt-5">
      <Link href="/RelatorioCompleto" className="flex items-center gap-2">
        <FontAwesomeIcon icon={faChevronLeft} className="text-blackPrimary" />
        <p className="text-blackPrimary font-semibold">Relatório completo</p>
      </Link>
    </div>
  );
};

export default Header;

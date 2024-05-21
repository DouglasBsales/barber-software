
import Image from "next/image";

import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="w-[335px] flex justify-between">
      <div className="flex gap-5 items-center">
        <div>
          <Image
            src="/perfilDog.png"
            alt="foto dog"
            width={47}
            height={47}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-blackOpacity">Bom dia,</p>
          <p className=" text-blackPrimary font-bold">Seja bem-vindo!</p>
        </div>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faBell}
          className="size-5 border-2 rounded-full p-2"
        />
      </div>
    </div>
  );
};

export default Header;

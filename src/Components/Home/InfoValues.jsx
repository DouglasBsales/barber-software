import { HomeContext } from "@/Context/HomeContext";
import { faEye, faEyeSlash, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext } from "react";

const InfoValues = () => {
  const { seeValue, setSeeValue, arrayRelatorioCompleto, arrayRelatorioDia, setPage } =
    useContext(HomeContext);

  return (
    <div className="w-[326px] bg-white rounded-lg mt-[40px] px-5 border">
      <div className=" flex pt-5 pb-4 gap-4">
        <div className="">
          <FontAwesomeIcon
            icon={faWallet}
            className="size-5 text-blackOpacity bg-whiteOpacity p-1 rounded-md border"
          />
        </div>
        <div>
          <p className="text-bluePrimary font-bold">Valores recebidos</p>
        </div>
      </div>
      <div>
        <div className="w-full h-[38px] flex justify-between items-center bg-whiteOpacity px-5 rounded-t-md border-x border-t">
          <p className="text-blackOpacity font-bold">Valor total</p>
          <button onClick={() => setSeeValue(!seeValue)}>
            {seeValue ? (
              <FontAwesomeIcon icon={faEye} className="text-blackOpacity" />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="text-blackOpacity"
              />
            )}
          </button>
        </div>
        <div className=" bg-white py-6 border rounded-b-md">
          <div className="w-full">
            <input
              type={`${seeValue ? "text" : "password"}`}
              value={`R$ ${arrayRelatorioCompleto
                .reduce((total, service) => total + service.valuePayment, 0)
                .toFixed(2)
                .replace(".", ",")}`}
              className="w-full text-[40px] text-bluePrimary font-bold text-center"
            />
          </div>
        </div>
      </div>
      <div className="pt-3">
        <div>
          <p className="text-blackOpacity font-bold">Valor atual do dia</p>
          <input
            type="text"
            value={`R$ ${arrayRelatorioDia
              .reduce((total, service) => total + service.valuePayment, 0)
              .toFixed(2)
              .replace(".", ",")}`}
            className="font-bold text-bluePrimary"
          />
        </div>
        <div className="pt-3 pb-5">
          <Link href="/RelatorioDia" className="flex justify-center bg-bluePrimary rounded-md" onClick={()=> setPage("RelatorioDia")}>
            <p className="text-white font-bold py-1">Ver detalhes</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoValues;

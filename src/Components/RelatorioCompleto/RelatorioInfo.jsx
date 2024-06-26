import Link from "next/link";

import { HomeContext } from "@/Context/HomeContext";
import { useContext, useEffect } from "react";

import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RelatorioInfo = () => {
  const { arrayRelatorioCompleto,setArrayRelatorioCompleto, setArrayRelatorioData } = useContext(HomeContext);

  useEffect(()=> {
   
    const estorageItem = localStorage.getItem("Relatorio_Completo")
    if(estorageItem){
      setArrayRelatorioCompleto(JSON.parse(estorageItem))
    }
  }, [setArrayRelatorioCompleto])

  useEffect(()=> {
    localStorage.setItem("Relatorio_Completo", JSON.stringify(arrayRelatorioCompleto));
  }, [arrayRelatorioCompleto])


  const relatorioDataDay = (id) => {
    const selected = arrayRelatorioCompleto.find(
      (relatorio) => relatorio.id === id
    );
    setArrayRelatorioData([selected]);
    localStorage.setItem("RelatorioDetalhado", JSON.stringify([selected]));
  };

  return (
    <div className="flex flex-col items-center pb-[100px]">
      <p className="text-blackOpacity font-bold text-2xl">
        Relatórios completos
      </p>
      <div className="mt-10">
        {arrayRelatorioCompleto.map((relatorio) => (
          <div
            key={relatorio.id}
            className="w-[326px] bg-white rounded-md mb-4"
          >
            <div className="px-5 py-3 ">
              <div className="flex justify-between items-center rounded-md">
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="text-blackOpacity size-5"
                  />
                  <p className="text-blackOpacity text-xl">
                    {relatorio.infoDate.weekday}
                  </p>
                </div>
                <div>
                  <p className="text-blackOpacity">{relatorio.infoDate.date}</p>
                </div>
              </div>
              <div className="pt-3">
                <Link
                  href="/RelatorioCompletoInfo"
                  className="w-[160px] flex justify-center bg-bluePrimary rounded-md py-1 px-1"
                  onClick={() => relatorioDataDay(relatorio.id)}
                >
                  <p className="text-white font-bold">Ver detalhes</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatorioInfo;

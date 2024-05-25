import { HomeContext } from "@/Context/HomeContext";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

const RelatorioInfo = () => {
  const { arrayRelatorioCompleto } = useContext(HomeContext);

  console.log(arrayRelatorioCompleto);

  return (
    <div className="flex flex-col items-center pb-[100px]">
      <p className="text-blackOpacity font-bold text-2xl">
        Serviços realizados
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
                <button className="bg-bluePrimary py-1 px-6 rounded-md">
                  <p className="text-white font-bold">Ver detalhes</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatorioInfo;

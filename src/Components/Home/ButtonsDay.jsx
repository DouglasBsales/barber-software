import { HomeContext } from "@/Context/HomeContext";
import { nanoid } from "nanoid";
import { useContext, useState, useEffect } from "react";
import ModalFinishDay from "./ModalFinishDay";

const ButtonsDay = () => {
  const {
    initialDay,
    setInitialDay,
    arrayRelatorioDia,
    setArrayRelatorioDia,
    setArrayRelatorioCompleto,
    infoDate, 
    setInfoDate,
    openModalFinishDay,
    setOpenModalFinishDay
  } = useContext(HomeContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Marcar que estamos no cliente
    setIsClient(true);

    // Carregar o estado inicial do localStorage quando o componente é montado
    const storedInitialDay = localStorage.getItem("initialDay");
    if (storedInitialDay !== null) {
      setInitialDay(JSON.parse(storedInitialDay));
    }
  }, [setInitialDay]);

  const initDay = () => {
    const hour = new Date().toLocaleTimeString("pt-BR");
    const date = new Date().toLocaleDateString("pt-BR");
    const weekday = new Date().toLocaleDateString("pt-BR", { weekday: "long" });

    setInfoDate({ hour, date, weekday });
    localStorage.setItem("infoDateInitDay",JSON.stringify({ hour, date, weekday }));

    alert("Dia iniciado!");
    setInitialDay(false);
    localStorage.setItem("initialDay", JSON.stringify(false));
  };

  const finishDay = () => {
    setOpenModalFinishDay(true)
    setInitialDay(true);

    localStorage.setItem("initialDay", JSON.stringify(true));

    const arrayWithId = [
      {
        id: nanoid(),
        infoDate: infoDate,
        finishedDayHour: new Date().toLocaleTimeString("pt-BR"),
        infos: [arrayRelatorioDia],
      },
    ];

    setArrayRelatorioCompleto((prevArrayRelatorioCompleto) => [
      ...prevArrayRelatorioCompleto,
      ...arrayWithId,
    ]);

    setArrayRelatorioDia([]);
    localStorage.setItem("Servicos_dia", JSON.stringify([]));
  };

  if (!isClient) {
    return (
      <div className="w-full flex justify-center pt-5 pb-6">
        <div>
          <button className="bg-gray-400 rounded-md">
            <p className="py-3 px-16 text-white font-bold">Carregando...</p>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center pt-5 pb-6">
      <div>
        {initialDay ? (
          <button className="bg-greenPrimary rounded-md" onClick={initDay}>
            <p className="py-3 px-16 text-white font-bold">Iniciar o dia</p>
          </button>
        ) : (
          <button className="bg-redPrimary rounded-md" onClick={finishDay}>
            <p className="py-3 px-16 text-white font-bold">Finalizar o dia</p>
          </button>
        )}
      </div>
      { openModalFinishDay && <ModalFinishDay/>}
    </div>
  );
};

export default ButtonsDay;

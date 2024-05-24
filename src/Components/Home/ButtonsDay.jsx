import { HomeContext } from "@/Context/HomeContext";
import { useContext, useState, useEffect } from "react";

const ButtonsDay = () => {
  const {
    initialDay,
    setInitialDay,
    arrayRelatorioDia,
    setArrayRelatorioDia,
    arrayRelatorioCompleto,
    setArrayRelatorioCompleto,
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
    alert("Dia iniciado!");
    setInitialDay(false);
    localStorage.setItem("initialDay", JSON.stringify(false));
    console.log(hour, date);
  };

  const finishDay = () => {
    alert("Dia finalizado!");
    setInitialDay(true);

    localStorage.setItem("initialDay", JSON.stringify(true));
    
    setArrayRelatorioCompleto([arrayRelatorioDia]);

    setArrayRelatorioDia([]);
    localStorage.setItem("Servicos_dia", JSON.stringify([]));
    console.log(arrayRelatorioDia);
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
    </div>
  );
};

export default ButtonsDay;

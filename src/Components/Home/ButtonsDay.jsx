import { HomeContext } from "@/Context/HomeContext";
import { useContext } from "react";

const ButtonsDay = () => {
  const { initialDay, setInitialDay } = useContext(HomeContext);

  const initDay = ()=>{
    alert("Dia iniciado!")
    setInitialDay(false)
  }

  return (
    <div className="w-full flex justify-center pt-5 pb-6">
      <div>
        {initialDay ? (
          <button className="bg-greenPrimary rounded-md" onClick={initDay}>
            <p className="py-3 px-16 text-white font-bold">Iniciar o dia</p>
          </button>
        ):  <button className="bg-redPrimary rounded-md" onClick={()=> setInitialDay(true)}>
        <p className="py-3 px-16 text-white font-bold">Finalizar o dia</p>
      </button>}
       
      </div>
    </div>
  );
};

export default ButtonsDay;

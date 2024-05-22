import { HomeContext } from "@/Context/HomeContext";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

const RelatorioDiaInfo = () => {
  const { arrayRelatorioDia } = useContext(HomeContext);

  return (
    <div className="flex flex-col items-center">
      <p className="text-blackOpacity font-bold text-2xl">
        Serviços realizados
      </p>
      <div className="w-[326px] bg-white rounded-md mt-10 px-[23px]">
        {arrayRelatorioDia.map((service) => (
          <div key={service.id}>
            <div>
              <div className="border-b pt-4">
                <div className="flex gap-2">
                  <div>
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-blackOpacity"
                    />
                  </div>
                  <div className="w-full flex justify-between">
                    <p className="font-light text-blackOpacity">
                      {service.hour}
                    </p>
                    <p className="font-light text-blackOpacity">
                      {service.date}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="font-bold text-bluePrimary">Nome</p>
                  <p className="text-blackPrimary">{service.name}</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-bold text-bluePrimary">Serviço</p>
                  <p className="text-blackPrimary">{service.service}</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-bold text-bluePrimary">Serviço</p>
                  <p className="text-blackPrimary">{service.typePayment}</p>
                </div>
                <div className="flex gap-2 pb-4">
                  <p className="font-bold text-bluePrimary">Valor</p>
                  <p className="text-blackPrimary">
                    R$ {service.valuePayment.toFixed(2).replace(".", ",")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatorioDiaInfo;

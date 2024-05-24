import { useContext } from "react";

import { ConfigContext } from "@/Context/ConfigContext";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServicesAdded = () => {
  const { arrayAddedService, setArrayAddedService } = useContext(ConfigContext);

  const deleteService = (id) => {
    const newArray = arrayAddedService.filter((service) => service.id !== id);
    setArrayAddedService(newArray);
    localStorage.setItem("Servicos_adicionados", JSON.stringify(newArray));
    alert("Serviço deletado com sucesso!")
  };

  return (
    <div className="px-[30px] bg-whiteOpacity rounded-md mt-3 pb-3">
      {arrayAddedService.length === 0 && (
        <p className="pt-3">Nenhum serviço adicionado</p>
      )}

      {arrayAddedService.map((service) => (
        <div
          key={service.id}
          className="flex justify-between items-center border-b border-blackPrimary py-3 "
        >
          <div>
            <div className="flex gap-2">
              <p className="text-bluePrimary font-semibold">Serviço:</p>
              <p>{service.nameService}</p>
            </div>
            <div className="flex gap-2">
              <p className="text-bluePrimary font-semibold">Valor:</p>
              <p>R$ {service.valuePayment.toFixed(2).replace(".", ",")}</p>
            </div>
          </div>
          <div>
            <button onClick={() => deleteService(service.id)}>
              <FontAwesomeIcon
                icon={faTrash}
                className="size-5 text-blackOpacity"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesAdded;

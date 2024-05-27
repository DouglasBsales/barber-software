import { HomeContext } from "@/Context/HomeContext";
import { useContext, useEffect, useState } from "react";

import { nanoid } from "nanoid";
import { ConfigContext } from "@/Context/ConfigContext";

const ModalService = () => {
  const { setModalService, arrayRelatorioDia, setArrayRelatorioDia } =
    useContext(HomeContext);

  const { arrayAddedService } = useContext(ConfigContext);

  const [valueName, setValueName] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [valuePayment, setValuePayment] = useState("0");

  const handleServiceChange = (e) => {
    const serviceName = e.target.value;
    const service = arrayAddedService.find(
      (service) => service.nameService === serviceName
    );
    setSelectedService(service);
  };

  useEffect(() => {
    const storageItem = localStorage.getItem("Servicos_dia");
    if (storageItem) {
      setArrayRelatorioDia(JSON.parse(storageItem));
    }
  }, [setArrayRelatorioDia]);

  useEffect(() => {
    localStorage.setItem("Servicos_dia", JSON.stringify(arrayRelatorioDia));
  }, [arrayRelatorioDia]);

  const addService = () => {
    if (valueName === "" || !selectedService || valuePayment === "0") {
      alert("Selecione todas as categorias");
      return;
    }

    const service = {
      id: nanoid(),
      hour: new Date().toLocaleTimeString("pt-BR"),
      date: new Date().toLocaleDateString("pt-BR"),
      name: valueName,
      service: selectedService.nameService,
      typePayment: valuePayment,
      valuePayment: selectedService.valuePayment,
    };

    const newService = [...arrayRelatorioDia, service]

    setArrayRelatorioDia(newService);
    localStorage.setItem("Servicos_dia", JSON.stringify(newService));
    alert("Serviço adicionado!");
    setModalService(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="w-[326px] bg-white rounded-md px-[25px]">
        <div className="pb-3 pt-4">
          <p className="text-blackOpacity font-semibold">Nome</p>
          <input
            type="text"
            value={valueName}
            onChange={(e) => setValueName(e.target.value)}
            className="w-full outline-none border-b border-blackPrimary rounded-none bg-transparent pt-"
          />
        </div>
        <div>
          <p className="text-blackOpacity font-semibold">Serviço: </p>
          <select
            className="outline-none bg-transparent"
            onChange={handleServiceChange}
          >
            <option value="">Selecione um serviço</option>
            {arrayAddedService.map((service) => (
              <option key={service.id} value={service.nameService}>
                {service.nameService}
              </option>
            ))}
          </select>
        </div>
        <div className="pt-4">
          <p className="text-blackOpacity font-semibold">
            Forma de pagamento:{" "}
          </p>
          <select
            className="outline-none bg-transparent"
            onChange={(e) => setValuePayment(e.target.value)}
          >
            <option value="0">Selecione um pagamento</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Pix">Pix</option>
            <option value="Cartão">Cartão</option>
          </select>
        </div>
        <div className="flex justify-between pt-9 pb-4">
          <div>
            <button className="bg-greenPrimary rounded-md" onClick={addService}>
              <p className="text-white font-bold py-1 px-5">Adicionar</p>
            </button>
          </div>
          <div>
            <button
              className="bg-redPrimary rounded-md"
              onClick={() => setModalService(false)}
            >
              <p className="text-white font-bold py-1 px-5">Cancelar</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalService;

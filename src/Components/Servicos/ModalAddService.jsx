import { ConfigContext } from "@/Context/ConfigContext";
import { nanoid } from "nanoid";
import { useContext } from "react";

const ModalAddService = () => {
  const {
    setOpenModal,
    arrayAddedService,
    setArrayAddedService,
    nameService,
    setNameService,
    valueService,
    setValueService,
  } = useContext(ConfigContext);

  const addedService = () => {
    const service = {
      id: nanoid(),
      nameService: nameService,
      valuePayment: parseInt(valueService),
    };

    const arrayAtt = [...arrayAddedService, service];

    setArrayAddedService(arrayAtt);
    localStorage.setItem("Servicos_adicionados", JSON.stringify(arrayAtt));
    alert("Serviço adicionado!");
    setOpenModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="w-[326px] bg-white rounded-md px-[25px]">
        <div className="pb-3 pt-4">
          <p className="text-blackOpacity font-semibold">Nome do serviço:</p>
          <input
            type="text"
            className="w-full outline-none border-b border-blackPrimary rounded-none bg-transparent pt-"
            onChange={(e) => setNameService(e.target.value)}
          />
        </div>
        <div className="pb-3 pt-4">
          <p className="text-blackOpacity font-semibold">Valor do serviço</p>
          <input
            type="number"
            className="w-full outline-none border-b border-blackPrimary rounded-none bg-transparent pt-"
            onChange={(e) => setValueService(e.target.value)}
          />
        </div>
        <div className="flex justify-between pt-9 pb-4">
          <div>
            <button
              className="bg-greenPrimary rounded-md"
              onClick={addedService}
            >
              <p className="text-white font-bold py-1 px-5">Adicionar</p>
            </button>
          </div>
          <div>
            <button
              className="bg-redPrimary rounded-md"
              onClick={() => setOpenModal(false)}
            >
              <p className="text-white font-bold py-1 px-5">Cancelar</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddService;

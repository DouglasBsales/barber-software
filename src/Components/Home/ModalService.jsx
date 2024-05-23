import { HomeContext } from "@/Context/HomeContext";
import { useContext, useState } from "react";
import { nanoid } from 'nanoid';


const ModalService = () => {
  const { setModalService, arrayRelatorioDia, setArrayRelatorioDia } =
    useContext(HomeContext);

  const [value, setValue] = useState();
  const [valueService, setValueService] = useState("0");
  const [valuePayment, setValuePayment] = useState("0");

  const addService = () => {
    if (value === "" || valueService === "0" || valuePayment === "0") {
      alert("Selecione todas as categorias")
      return ;
    }

    const service = {
      id: nanoid(),
      hour: new Date().toLocaleTimeString("pt-BR"),
      date: new Date().toLocaleDateString("pt-BR"),
      name: value,
      service: valueService,
      typePayment: valuePayment,
      valuePayment: 25,
    };

    setArrayRelatorioDia([...arrayRelatorioDia, service]);
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
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full outline-none border-b border-blackPrimary rounded-none bg-transparent pt-"
            />
          </div>
          <div>
            <p className="text-blackOpacity font-semibold">Serviço: </p>
            <select
              className="outline-none bg-transparent"
              onChange={(e) => setValueService(e.target.value)}
            >
              <option value="0">Selecione um serviço</option>
              <option value="Corte">Corte</option>
              <option value="Corte + barba">Corte + barba</option>
              <option value="Barba">Barba</option>
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

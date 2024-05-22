import { HomeContext } from "@/Context/HomeContext";
import { useContext } from "react";

const ModalService = () => {
  const { setModalService } = useContext(HomeContext);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="w-[326px] bg-white rounded-md px-[25px]">
        <form>
          <div className="pb-3 pt-4">
            <p className="text-blackOpacity font-semibold">Nome</p>
            <input
              type="text"
              className="w-full outline-none border-b border-blackPrimary"
            />
          </div>
          <div>
            <p className="text-blackOpacity font-semibold">Serviço: </p>
            <select className="outline-none">
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
            <select className="outline-none">
              <option value="0">Selecione um serviço</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Pix">Pix</option>
              <option value="Cartão">Cartão</option>
            </select>
          </div>
          <div className="flex justify-between pt-9 pb-4">
            <div>
              <button className="bg-greenPrimary rounded-md">
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
        </form>
      </div>
    </div>
  );
};

export default ModalService;

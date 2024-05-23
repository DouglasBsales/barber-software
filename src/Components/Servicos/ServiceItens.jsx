import { ConfigContext } from "@/Context/ConfigContext";
import { useContext } from "react";

import {faChevronDown ,faChevronUp ,faCirclePlus ,faShop} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ModalAddService from "./ModalAddService";
import ServicesAdded from "./ServicesAdded";

const ServiceItens = () => {
  const { openModal, setOpenModal, dropDown, setDropDown} = useContext(ConfigContext);

  const showService = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="max-w-6xl flex flex-col items-center px-8 pt-[40px]">
      <p className="text-2xl font-bold text-blackOpacity pb-10">Serviços</p>
      <div className="w-[326px] bg-white rounded-md px-5">
        <div className="flex flex-col gap-5 pt-5 pb-5">
          <div>
            <div className="flex items-center">
              <button className="flex gap-2 items-center outline-none" onClick={showService}>
                <FontAwesomeIcon
                  icon={faShop}
                  className="text-blackPrimary size-5"
                />
                <p className="text-blackPrimary">Serviços adicionados</p>
                {dropDown ? (
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="text-blackPrimary"
                  />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </button>
            </div>
            {dropDown ? <ServicesAdded/> : null}
          </div>
          <div className="flex justify-between items-center">
            <button
              className="flex gap-2 items-center outline-none"
              onClick={() => setOpenModal(true)}
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="text-blackPrimary size-5"
              />
              <p className="text-blackPrimary">Adicionar serviço</p>
            </button>
          </div>
        </div>
      </div>
      {openModal && <ModalAddService />}
    </div>
  );
};

export default ServiceItens;

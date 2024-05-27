import { HomeContext } from "@/Context/HomeContext";
import { useContext, useEffect, useState } from "react";

import {
  faCaretDown,
  faCaretUp,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardInfoPayment from "./CardInfoPayment";
import ModalComissao from "./ModalComissao";

const CardRelatorioInfo = () => {
  const { arrayRelatorioData, setArrayRelatorioData} = useContext(HomeContext);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const [openModalComissao, setOpenModalComissao] = useState(false);
  const [valueTotal, setValueTotal] = useState({});

  const seeInfoPayment = (payment) => {
    setSelectedPayment(selectedPayment === payment ? null : payment);
  };

  const showComissao = () => {
    const totalValue = arrayRelatorioData
      .flatMap((relatorio) => {
        const lastInfoArray = relatorio.infos[relatorio.infos.length - 1];
        return lastInfoArray.map((info) => info.valuePayment);
      })
      .reduce((total, value) => total + value, 0);

    const totalPor2 = totalValue / 2;

    const valoresTotais = {
      totalValue,
      totalPor2,
    };

    setValueTotal(valoresTotais);
    setOpenModalComissao(true);
  };


  useEffect(()=> {
    const estorageItem = localStorage.getItem("RelatorioDetalhado")
    if(estorageItem){
      setArrayRelatorioData(JSON.parse(estorageItem))
    }
  }, [setArrayRelatorioData])

  return (
    <div className="max-w-6xl flex flex-col items-center px-8 pt-[40px] pb-[100px]">
      <p className="text-2xl font-bold text-blackOpacity pb-10">Relatório</p>
      <div>
        {arrayRelatorioData.map((relatorio, index) => (
          <div
            key={relatorio.id || index}
            className="w-[326px] bg-white rounded-md px-[23px] pt-3 pb-3"
          >
            <div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="text-blackOpacity" />
                <p className="text-blackOpacity font-light">
                  Dia iniciado às {relatorio.infoDate.hour}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="text-blackOpacity" />
                <p className="text-blackOpacity font-light">
                  Dia finalizado às {relatorio.finishedDayHour}
                </p>
              </div>
            </div>
            <div className="pt-5">
              <div className="flex gap-2">
                <p className="text-blackPrimary font-semibold">
                  Serviços realizados:
                </p>
              </div>
              {/* Objeto para armazenar as contagens de serviços */}
              {Object.entries(
                relatorio.infos.reduce((acc, subArray) => {
                  subArray.forEach((info) => {
                    acc[info.service] = (acc[info.service] || 0) + 1;
                  });
                  return acc;
                }, {})
              ).map(([serviceName, count]) => (
                <div key={serviceName} className="flex gap-2">
                  <p className="text-bluePrimary font-semibold">
                    {serviceName}:
                  </p>
                  <p>{count}</p>
                </div>
              ))}
            </div>
            <div className="pt-7">
              <div className="flex gap-2">
                <p className="text-blackPrimary font-semibold">Pagamentos:</p>
              </div>
              {/* Objeto para armazenar as contagens de pagamentos */}
              {Object.entries(
                relatorio.infos.reduce((acc, subArray) => {
                  subArray.forEach((info) => {
                    acc[info.typePayment] = (acc[info.typePayment] || 0) + 1;
                  });
                  return acc;
                }, {})
              ).map(([paymentType, count]) => (
                <div key={paymentType}>
                  <button
                    className="flex items-center gap-2"
                    onClick={() => seeInfoPayment(paymentType)}
                  >
                    <p className="text-bluePrimary font-semibold">
                      {paymentType}:
                    </p>
                    <p>{count}</p>
                    {selectedPayment === paymentType ? (
                      <FontAwesomeIcon icon={faCaretUp} />
                    ) : (
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        className="text-blackPrimary"
                      />
                    )}
                  </button>
                  {selectedPayment === paymentType && (
                    <CardInfoPayment
                      showPaymentQtd={arrayRelatorioData.flatMap((relatorio) =>
                        relatorio.infos.flatMap((subArray) =>
                          subArray.filter(
                            (info) => info.typePayment === paymentType
                          )
                        )
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center pt-10">
              <button
                className="bg-bluePrimary p-3 rounded-md"
                onClick={showComissao}
              >
                <p className="text-white font-bold">Realizar comissão</p>
              </button>
            </div>
          </div>
        ))}
        {openModalComissao && (
          <ModalComissao
            valueTotal={valueTotal}
            setOpenModalComissao={setOpenModalComissao}
          />
        )}
      </div>
    </div>
  );
};

export default CardRelatorioInfo;

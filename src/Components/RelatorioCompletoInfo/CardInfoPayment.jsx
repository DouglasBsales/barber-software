import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardInfoPayment = ({showPaymentQtd}) => {
  return (
    <div className="w-[280px] bg-whiteOpacity rounded-md px-2 my-3">
      <div>
          {showPaymentQtd.map((service) => (
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
                    <div className="w-full flex justify-between items-center text-xs">
                      <p className="font-light text-blackOpacity">
                        {service.hour}
                      </p>
                      <p className="font-light text-blackOpacity">
                        {service.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <p className="font-bold text-bluePrimary">Nome:</p>
                    <p className="text-blackPrimary">{service.name}</p>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <p className="font-bold text-bluePrimary">Serviço:</p>
                    <p className="text-blackPrimary">{service.service}</p>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <p className="font-bold text-bluePrimary">
                      Forma de Pagamento:
                    </p>
                    <p className="text-blackPrimary">
                      {service.typePayment}
                    </p>
                  </div>
                  <div className="flex gap-2 pb-4 text-xs">
                    <p className="font-bold text-bluePrimary">Valor:</p>
                    <p className="text-blackPrimary">
                      R$ {service.valuePayment.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex gap-2 py-2">
           <p className="text-bluePrimary font-bold">Valor total: </p>
           <p className=" text-blackPrimary font-semibold">R$ {showPaymentQtd.reduce((total, service) => total + service.valuePayment, 0).toFixed(2).replace(".", ",")}</p>
          </div>
      </div>
    </div>
  );
};

export default CardInfoPayment;

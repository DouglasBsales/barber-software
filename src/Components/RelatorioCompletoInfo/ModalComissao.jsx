import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalComissao = ({ valueTotal, setOpenModalComissao }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="w-[326px] bg-white rounded-md px-[25px]">
        <div className="flex justify-end pt-2" onClick={()=> setOpenModalComissao(false)}>
            <button >
            <FontAwesomeIcon icon={faRectangleXmark} className="size-6 text-redPrimary"/>
            </button>
        </div>
        <div className="flex flex-col justify-center items-center py-3">
          <p className="text-blackOpacity font-semibold">Parabéns</p>
          <div className="flex items-center gap-2">
              <p className="text-blackPrimary font-semibold">O valor total foi de:</p>
              <p className="text-bluePrimary font-semibold"> R$ {valueTotal.totalValue.toFixed(2).replace(".", ",")}</p>
          </div>
          <div className="flex items-center gap-2">
              <p className="text-blackPrimary font-semibold">Sua comissão é de:</p>
              <p className="text-bluePrimary font-semibold"> R$ {valueTotal.totalPor2.toFixed(2).replace(".", ",")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComissao;

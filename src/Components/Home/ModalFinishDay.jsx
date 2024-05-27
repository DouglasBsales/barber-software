import Link from "next/link";

import { HomeContext } from "@/Context/HomeContext";
import { useContext } from "react";

const ModalFinishDay = () => {
  const { setOpenModalFinishDay, setPage } = useContext(HomeContext);

  const modalRelatorioOpen = ()=> {
    setOpenModalFinishDay(false)
    setPage("RelatorioCompleto")
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="w-[326px] bg-white rounded-md px-[25px]">
        <div className="flex flex-col justify-center items-center py-3">
          <p className="text-blackOpacity text-xl font-semibold">
            Dia finalizado!
          </p>
          <div className="py-3">
            <button className="bg-bluePrimary py-1 px-5 rounded-md">
              <Link
                href="/RelatorioCompleto"
                className="text-white font-semibold"
                onClick={modalRelatorioOpen}
              >
                Veja seu relatório do dia
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFinishDay;

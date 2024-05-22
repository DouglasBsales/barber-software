import Image from "next/image";
import iconeBarber from "../../assets/íconeBarber.png";

const RelatorioDiaVazio = () => {
  return (
    <div className="text-center">
      <p className="text-blackOpacity font-bold text-2xl">
        Você ainda não realizou serviços
      </p>
      <div className="flex justify-center pt-16">
        <Image src={iconeBarber} alt="iconeBarber" with={290} height={290} />
      </div>
    </div>
  );
};

export default RelatorioDiaVazio;

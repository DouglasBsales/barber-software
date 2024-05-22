import {
  faHouse,
  faListCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  return (
    <div className="w-full h-[64px] flex justify-center items-center bg-white fixed-bottom">
      <div className="w-[333px] flex justify-center border">
        <div className="">
            <div className="w-[61px] h-[61px] flex justify-center items-center bg-bluePrimary rounded-full relative bottom-[32px]">
              <FontAwesomeIcon icon={faPlus} className="text-white size-"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

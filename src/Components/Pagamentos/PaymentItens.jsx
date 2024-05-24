import { useContext } from 'react'
import { ConfigContext } from '@/Context/ConfigContext'

import { faChevronDown, faChevronUp, faCirclePlus, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const PaymentItens = () => {

    const { dropDown ,setDropDown} = useContext(ConfigContext)

  return (
    <div className="max-w-6xl flex flex-col items-center px-8 pt-[40px]">
    <p className="text-2xl font-bold text-blackOpacity pb-10">Pagamentos</p>
    <div className="w-[326px] bg-white rounded-md px-5">
      <div className="flex flex-col gap-5 pt-5 pb-5">
        <div className="flex items-center">
          <button
            className="flex gap-2 items-center outline-none"
            onClick={() => setDropDown(!dropDown)}
          >
            <FontAwesomeIcon
              icon={faFileInvoiceDollar}
              className="text-blackPrimary size-5"
            />
            <p className="text-blackPrimary">Pagamentos adicionados</p>

            {dropDown ? (
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-blackPrimary"
              />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} />
            )}
          </button>
        </div>
        <div className="flex justify-between items-center">
          <button className="flex gap-2 items-center outline-none">
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="text-blackPrimary size-5"
            />
            <p className="text-blackPrimary">Adicionar pagamento</p>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PaymentItens

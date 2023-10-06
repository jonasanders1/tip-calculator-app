import React, { useEffect, useState } from "react"
import "./bill.css"


interface BillProps {
  setBill: React.Dispatch<React.SetStateAction<number>>
}

const Bill: React.FC<BillProps> = ({setBill}) => {
  const [billTotal, setBillTotal] = useState(0)

  const handleBill = (e : React.ChangeEvent<HTMLInputElement>) => {
    setBillTotal(parseInt(e.target.value))
  }

  useEffect(() => {
    setBill(billTotal)
  },[billTotal])

  
  return (
    <div className="bill__content">
        <label className="bill__label">Bill</label>
        <div className="input__container">
            <i className='bx bx-dollar input-icon'></i>
            <input placeholder="100" type="number" className="bill__input" onChange={(e) => handleBill(e)}/>
        </div>
    </div>
  )
}

export default Bill
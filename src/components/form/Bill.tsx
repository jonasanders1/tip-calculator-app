import React, { useEffect, useState } from "react"
import "./bill.css"


interface BillProps {
  setBill: React.Dispatch<React.SetStateAction<number>>
}

const Bill: React.FC<BillProps> = ({setBill}) => {
  const [billTotal, setBillTotal] = useState(0)
  const [negativeError, setNegativeError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // Function to handling the bill input
  // ---> if the user deletes input, the billInput = NaN
  // so we need to check for that and make sure it returns 0 if that happens
  const handleBill = (e : React.ChangeEvent<HTMLInputElement>) => {
    const billInput = e.target.value 
    if(!isNaN(parseFloat(billInput))) {
      if(parseInt(billInput) >= 0){
        setBillTotal(parseInt(billInput))
        setNegativeError(false)
        setErrorMessage("")
      } else {
        setNegativeError(true)
        setErrorMessage("You can`t be paid for eating")
        setBillTotal(0)
      }
    } else {
      setBillTotal(0)
    }
  }

  useEffect(() => {
    if(typeof billTotal === 'number'){
      setBill(billTotal)
    } else {
      setBill(0)
    }
  },[billTotal, setBill])


  return (
    <div className="bill__content">
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <label className="bill__label">Bill</label>
        <p  className="error__message">{errorMessage}</p>
      </div>
        <div className="input__container">
            <i className='bx bx-dollar input-icon'></i>
            <input placeholder="100" type="number" className={`bill__input ${negativeError ? "error" : ""}`} onChange={(e) => handleBill(e)}/>
        </div>
    </div>
  )
}

export default Bill
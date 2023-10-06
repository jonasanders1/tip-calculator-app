import { useEffect, useState } from "react"
import TipButton from "./TipButton"
import "./tip.css"

interface TipProps {
  setSelected: React.Dispatch<React.SetStateAction<number>>
}

const Tip: React.FC<TipProps> = ({setSelected}) => {
  const [customTip, setCustomTip] = useState(5)
  const [negativeError, setNegativeError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  // state for styling the selected button

  // function for handling the input change
  const handleCustomTip = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tipInput = e.target.value
    if (!isNaN(parseFloat(tipInput))){
      if(parseInt(tipInput) >= 0){
        setSelected(parseInt(tipInput))
        setNegativeError(false)
        setErrorMessage("")
      } else {
        setNegativeError(true)
        setErrorMessage("Hahaa, nice try!")
        setSelected(0)
      }
    } else {
      setCustomTip(0)
    }
  }

  // Update the selected value whenever the selected value changes
  useEffect(()=> {
    if (typeof customTip === 'number'){
      setSelected(customTip)
    } else {
      setSelected(0)
    }
  }, [customTip, setSelected])

  return (
    <div className="tip__content">

      <div style={{display:"flex", justifyContent:"space-between"}}>
        <label className={`tip__label `}>Select tip %</label>
        <p className="error__message">{errorMessage}</p>
      </div>

      <div className="tip__container">
        <div className="button__group">
            <TipButton label="5%" value={5} setSelected={setSelected}/>
            <TipButton label="10%" value={10} setSelected={setSelected}/>
            <TipButton label="15%" value={15} setSelected={setSelected}/>
        </div>

        <div className="button__group">
          <TipButton label="25%" value={25} setSelected={setSelected}/>
          <TipButton label="50%" value={50} setSelected={setSelected}/>
          <input 
            type="number"
            placeholder="Custom" 
            className={`input__button ${negativeError ? "error": ""}`}
            onChange={(e) => handleCustomTip(e)}
          />
        </div>
      </div>

    </div>
  )
}

export default Tip
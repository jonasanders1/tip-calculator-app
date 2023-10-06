import React, { useEffect, useState } from "react"
import "./people.css"


interface PeoplesProps {
  setPeoples: React.Dispatch<React.SetStateAction<number>>
}



const Peoples:React.FC<PeoplesProps> = ({setPeoples}) => {
  const [numberOfPeople, setNumberOfPeople] = useState(1)
  const [negativeNumber, setNegativeNumber] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  
  const handlePeoples = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberOfPeoples = e.target.value 
  
    if(!isNaN(parseFloat(numberOfPeoples))){
      if(parseInt(numberOfPeoples) >= 0) {
        setNumberOfPeople(parseInt(numberOfPeoples))
        setNegativeNumber(false)
        setErrorMessage("")
      } else {
        setNegativeNumber(true)
        setErrorMessage("Must be at least one")
        setNumberOfPeople(1)
      }
    } else {
      setNumberOfPeople(1)
    }
  }

    // Update the selected value whenever the selected value changes
    useEffect(()=> {
      if(typeof numberOfPeople === 'number'){
        setPeoples(numberOfPeople)
      } else {
        setPeoples(1)
      }
    }, [numberOfPeople, setPeoples])
  
  return (
    <div className="people__content">
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <label className="people__label">Number of people</label>
        <p className="error__message">{errorMessage}</p>
      </div>
        <div className="people__container">
            <i className='bx bxs-user input-icon'></i>
            <input placeholder="1" type="number" className={`people__input ${negativeNumber ? "error" : ""}`} onChange={(e) => handlePeoples(e)}/>
        </div>
    </div>
  )
}

export default Peoples
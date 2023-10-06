import React, { useEffect, useState } from "react"
import "./people.css"


interface PeoplesProps {
  setPeoples: React.Dispatch<React.SetStateAction<number>>
}



const Peoples:React.FC<PeoplesProps> = ({setPeoples}) => {
  const [numberOfPeople, setNumberOfPeople] = useState(0)
  
  const handlePeoples = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPeople(parseInt(e.target.value))
  }
  
    // Update the selected value whenever the selected value changes
    useEffect(()=> {
      setPeoples(numberOfPeople)
    }, [numberOfPeople])
  
  return (
    <div className="people__content">
        <label className="people__label">Number of people</label>
        <div className="people__container">
            <i className='bx bxs-user input-icon'></i>
            <input placeholder="3" type="number" className="people__input" onChange={(e) => handlePeoples(e)}/>
        </div>
    </div>
  )
}

export default Peoples
import React, { useEffect, useState } from "react"
import "./people.css"


interface PeoplesProps {
  setPeoples: React.Dispatch<React.SetStateAction<number>>
}



const Peoples:React.FC<PeoplesProps> = ({setPeoples}) => {
  const [numberOfPeople, setNumberOfPeople] = useState(1)
  
  const handlePeoples = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberOfPeoples = e.target.value 
  
    if(!isNaN(parseFloat(numberOfPeoples))){
      setNumberOfPeople(parseInt(numberOfPeoples))
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
        <label className="people__label">Number of people</label>
        <div className="people__container">
            <i className='bx bxs-user input-icon'></i>
            <input placeholder="1" type="number" className="people__input" onChange={(e) => handlePeoples(e)}/>
        </div>
    </div>
  )
}

export default Peoples
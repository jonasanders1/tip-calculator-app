import React, { useEffect, useState } from "react"
import CalculationField from "./CalculationField"
import "./calculation.css"

interface CalculationProps{
  bill: number
  selectedPercentage: number
  numberOfPeople: number
}


const Calculation: React.FC<CalculationProps> = ({bill, selectedPercentage, numberOfPeople}) => {
  const [percentInDollars, setPercentInDollars] = useState(0)
  const[tipPerPerson, setTipPerPerson] = useState(0)
  const[totalPerPerson, setTotalPerPerson] = useState(1)

  useEffect(() => {
      setPercentInDollars(bill * (selectedPercentage / 100))
      setTipPerPerson(percentInDollars / numberOfPeople)
      setTotalPerPerson((bill / numberOfPeople) + tipPerPerson)
      
  }, [bill, numberOfPeople, selectedPercentage])

  return (
    <div className="calculation__content">
        <div>
            <CalculationField tipCategory="Tip Amount" tipNumber={tipPerPerson}/>
            <CalculationField tipCategory="Total" tipNumber={totalPerPerson}/>
        </div>
        <button className="reset__button">Reset</button>
    </div>
  )
}

export default Calculation
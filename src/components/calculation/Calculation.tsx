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
  const[tipPerPerson, setTipPerPerson] = useState<number | string>(0)
  const[totalPerPerson, setTotalPerPerson] = useState<number | string>(0)

  useEffect(() => {
    const calculatedPercentInDollars = bill * (selectedPercentage / 100);
    const calculatedTipPerPerson = calculatedPercentInDollars / numberOfPeople;
    const calculatedTotalPerPerson = (bill / numberOfPeople) + calculatedTipPerPerson;

    if (!isNaN(calculatedTipPerPerson) && !isNaN(calculatedTotalPerPerson)) {
      setTipPerPerson(calculatedTipPerPerson);
      setTotalPerPerson(calculatedTotalPerPerson);
    } else {
      // Handle the case where they are not valid numbers
      // You can set them to 0 or handle it differently based on your requirements
      setTipPerPerson("0");
      setTotalPerPerson("0");
    }

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
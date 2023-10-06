import CalculationField from "./CalculationField"
import "./calculation.css"

const Calculation = () => {
  return (
    <div className="calculation__content">
        <div>
            <CalculationField tipCategory="Tip Amount" tipNumber={40}/>
            <CalculationField tipCategory="Total" tipNumber={200}/>
        </div>
        <button className="reset__button">Reset</button>
    </div>
  )
}

export default Calculation
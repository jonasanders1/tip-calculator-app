import { useState } from "react"
import Bill from "./Bill"
import Peoples from "./Peoples"
import Tip from "./Tip"
import "./form.css"

const Form = () => {

  // Bill state to keep track of the bill
   const [bill, setBill] = useState(0)
   const [selected, setSelected] = useState(0)
   const [peoples, setPeoples] = useState(1)

  return (
    <div className="form__container">
      <div>
        <h4>Bill total</h4> {bill}
        <h4>selected %</h4> {selected}
        <h4>Number of people</h4> {peoples}

      </div>
        <div className="form__content">
          <Bill setBill={setBill}/>
          <Tip setSelected={setSelected}/>
          <Peoples setPeoples={setPeoples}/>    
        </div>
    </div>
  )
}

export default Form
import { useState } from "react"
import Bill from "./Bill"
import Peoples from "./Peoples"
import Tip from "./Tip"
import "./form.css"


interface FormProps {
  setBill: React.Dispatch<React.SetStateAction<number>>
  setSelectedPercentage: React.Dispatch<React.SetStateAction<number>>
  setNumberOfPeople: React.Dispatch<React.SetStateAction<number>>
}


const Form: React.FC<FormProps> = ({setBill, setSelectedPercentage, setNumberOfPeople}) => {

  // Bill state to keep track of the bill
  //const [bill, setBill] = useState(0)
  //const [selected, setSelected] = useState(0)
  //const [peoples, setPeoples] = useState(1)




  return (
    <div className="form__container">
        <div className="form__content">
          <Bill setBill={setBill}/>
          <Tip setSelected={setSelectedPercentage}/>
          <Peoples setPeoples={setNumberOfPeople}/>    
        </div>
    </div>
  )
}

export default Form
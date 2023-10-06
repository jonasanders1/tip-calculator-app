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
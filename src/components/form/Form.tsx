import Bill from "./Bill"
import Peoples from "./Peoples"
import Tip from "./Tip"
import "./form.css"

const Form = () => {
  return (
    <div className="form__container">
        <div className="form__content">
          <Bill />
          <Tip />
          <Peoples />    
        </div>
    </div>
  )
}

export default Form
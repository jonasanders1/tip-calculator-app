import Bill from "./Bill"
import Calculation from "./Calculation"
import Peoples from "./Peoples"
import Tip from "./Tip"
import "./form.css"

const Form = () => {
  return (
    <div className="form__container">
        <div className="form__content">
            <div className="left-side__container">
                <Bill />
                <Tip />
                <Peoples />
            </div>
            <div className="right-sige__container">
                <Calculation />
            </div>
        </div>
    </div>
  )
}

export default Form
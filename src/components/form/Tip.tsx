import TipButton from "./TipButton"
import "./tip.css"
const Tip = () => {
  return (
    <div className="tip__content">

        <label className="tip__label">Select tip %</label>
        <div className="tip__container">
            <div className="button__group">
                <TipButton label="5%" value={5}/>
                <TipButton label="10%" value={10}/>
                <TipButton label="15%" value={15}/>
            </div>

            <div className="button__group">
                <TipButton label="25%" value={25}/>
                <TipButton label="50%" value={50}/>
                <input type="number" placeholder="Custom" className="input__button"/>
            </div>
        </div>
    </div>
  )
}

export default Tip
import "./bill.css"

const Bill = () => {
  return (
    <div className="bill__content">
        <label className="bill__label">Bill</label>
        <div className="input__container">
            <i className='bx bx-dollar input-icon'></i>
            <input placeholder="100" type="number" className="bill__input"/>
        </div>
    </div>
  )
}

export default Bill
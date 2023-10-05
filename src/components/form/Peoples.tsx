import "./people.css"

const Peoples = () => {
  return (
    <div className="people__content">
        <label className="people__label">Number of people</label>
        <div className="people__container">
            <i className='bx bxs-user input-icon'></i>
            <input placeholder="3" type="number" className="people__input"/>
        </div>
    </div>
  )
}

export default Peoples
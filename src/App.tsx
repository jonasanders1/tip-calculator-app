
import { useState } from 'react'
import './App.css'
import Calculation from "./components/calculation/Calculation"
import Form from './components/form/Form'
import Header from './components/header/Header'
function App() {

  // Form states
  const [bill, setBill] = useState(1)
  const [selectedPercentage, setSelectedPercentage] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState(1)



  return (
    <div className='app'>
      <Header/>
      <div className="form">
        <Form 
          setBill={setBill} 
          setSelectedPercentage={setSelectedPercentage} 
          setNumberOfPeople={setNumberOfPeople}/>
        <Calculation 
          bill={bill} 
          selectedPercentage={selectedPercentage} 
          numberOfPeople={numberOfPeople}
          setBill={setBill}
          setSelectedPercentage={setSelectedPercentage}
          setNumberOfPeople={setSelectedPercentage}
        />
      </div>
    </div>  
  )
}

export default App

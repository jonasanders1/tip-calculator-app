
import './App.css'
import Calculation from "./components/calculation/Calculation"
import Form from './components/form/Form'
import Header from './components/header/Header'
function App() {

  return (
    <div className='app'>
      <Header/>
      <div className="form">
        <Form />
        <Calculation />
      </div>
    </div>  
  )
}

export default App

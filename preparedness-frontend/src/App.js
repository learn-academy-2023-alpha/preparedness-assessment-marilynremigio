import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {

  const [modal, setModal] = useState(false)
  const [inputName, setInputName] = useState("")

  const toggle = () => {
    if(inputName === "")
      alert("Please enter your name.")
    else
      setModal(!modal)
  }

  const handleChange = (e) => {
    setInputName(e.target.value)
  }

  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <br />
      <br />
      <div className="form">
          <Label for="name">Enter your name</Label>
        <div className="input-field">
          <Input type="text" value={inputName} onChange={handleChange} />
        </div>
          <Button 
            className="click-me"
            style={{background: '#0dcaf0', padding: '10px'}} 
            onClick={toggle} 
          >
          Click Me
          </Button>
          <Button 
            className="reset"
            style={{background: '#0dcaf0', padding: '10px'}} 
            onClick={handleChange} 
          >
            Reset
          </Button>
        </div>
        <ModalComponent modal={modal} toggle={toggle} inputName={inputName}/>
    </div>
  )
}

export default App
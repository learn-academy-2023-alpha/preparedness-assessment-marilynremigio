import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {

  const [modal, setModal] = useState(false)
  const [inputName, setInputName] = useState("")

  const toggle = () => {
    if(inputName === '')
      alert("Please enter your name.")
    else
      setModal(!modal)
  }

  const handleChange = (e) => {
    setInputName(e.target.value)
  // The e is the argument of an event handler, e.target.value is the value property of the text entered in the input field
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
          {/* The onChange event in React detects when the value of an input element changes. Add an onChange Handler to an Input. Pass an Input Value to a Function in a React Component. Storing an Input Value Inside of State. */}
        </div>
          <Button 
            className="click-me"
            type='submit' 
            style={{background: '#0dcaf0', padding: '10px'}} 
            onClick={toggle} 
            // onClick triggers toggle function which checks for user inputted name, and sets modal = true, which opens the modal
          >
          Click Me
          </Button>
          <Button 
            className="reset"
            style={{background: '#0dcaf0', padding: '10px'}} 
            onClick={handleChange} 
            // onClick triggers handleChange which looks for an event (user typing), if nothing was typed and user clicks reset button, then e.target.value has no value and the text field clears to empty
          >
            Reset
          </Button>
        </div>
        <ModalComponent modal={modal} toggle={toggle} inputName={inputName}/>
    </div>
  )
}

export default App
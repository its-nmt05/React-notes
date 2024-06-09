import { useState } from "react"
import "./App.css"

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    /*
     don't use something like counter++, as its postfix
     and value won't update immediately
    */
    if (counter < 20) counter++
    setCounter(counter)
  }
  const decreaseValue = () => {
    if (counter > 0) counter--
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur React with</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App

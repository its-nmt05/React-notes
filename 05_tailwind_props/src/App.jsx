import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)

  let userObj = {
    username: "chai",
    email: "chai@google.com",
    age: 21,
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      {/* <Card username="Nirmalya" CTA={userObj} /> */}
      <Card username="Chai" btnText="Click me" />
      <Card username="React" />
    </>
  )
}

export default App

/*
JS object destructuring:

const props = {
  username: "Chai",
  btnText: "Visit me",
}

const { username: name, btnText: text } = props
console.log(name, text)
*/

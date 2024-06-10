import Chai from "./Chai.jsx"

function App() {
  const username = "Nirmalya"

  return (
    <>
      <Chai />
      <h1>Chai aur React | {username}</h1>  
      <p>test para</p>
    </>
  )
}

/*
In <h1>Chai aur React | {username}</h1>, {username}, is not an expression, instead
it is an evaluated expression. This means 
*/

export default App

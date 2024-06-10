import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

/*
After parsing by something like Babel, the React componets get
ultimately converted to React Objects
*/
// const ReactElement = {
//   type: "a",
//   props: {
//       href: "https://www.google.com",
//       target: "_blank",
//   },
//   children: "Click me to visit Google",
// }

const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Visit Google
  </a>
)

const reactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "click me to visit Google",
)

ReactDOM.createRoot(document.getElementById("root")).render(
  /*
      The reason why this wouldn't work is that, 
      the ReactElement is a custom implementation of React objects
      and can only be understood by a custom renderer builty specifically
      for it. 
      
      The render() function provided by React will not be able
      to understand the meaning(names) of all the different keys 
      in our custom implementation. Since it was written for React objects
      and not for our custom implementation of React objects.

      For e.g => We've used the key 'type' to refer to the tag name of the element,
      but in React's own implementation, that could have been 'tagName', etc.
      So the render() function would never be able to understand this.
      There is a particular type of syntax to the parameters the render() function expects.
    */
  // ReactElement

  // this will be parsed correctly
  //anotherElement

  <App />
  // MyApp() # will work but not recommended
)

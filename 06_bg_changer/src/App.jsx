import { useState } from "react"

function App() {
  const colors = [
    "Black",
    "Red",
    "Orange",
    "Olive",
    "Green",
    "Turquoise",
    "Blue",
    "Pink",
    "Violet",
    "Purple",
    "Maroon",
  ]
  const [color, setColor] = useState(colors[0])

  const btns = colors.map((color) => (
    <button
      key={color}
      onClick={() => setColor(color)}
      className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  ))

  return (
    <div className="w-screen h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {btns}
        </div>
      </div>
    </div>
  )
}

export default App

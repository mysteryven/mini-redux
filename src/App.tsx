import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import A from './lib/counter';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <A />
    </div>
  )
}

export default App

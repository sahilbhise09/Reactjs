import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "sahil",
    age: 20
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400  text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="Sahil Bhise"  btnText="Click Me"/>
      <Card username="Secret Person" btnText="Click Me"/>
    </>
  )
}

export default App

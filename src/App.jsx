import React from 'react'
import { useState } from 'react'
import Form from '../components/Form'
import './App.css'

function App() {

  const [days, setDays] = useState(0)

  const [option, setOption] = useState("hotel")

  const selector = (e) => {
    setOption(e.target.value)

  }



  return (
    <>
      <div className='container'>

        <h1 className='title'>Price Calculator</h1>
        <select className='selector' value={option} onChange={selector}>
          <option value="">Hotel</option>
          <option value="car">Car</option>
        </select>

        <input className='selector' type="number" value={days} placeholder='Introduce nº of days' onChange={(e) => setDays(e.target.value)} />

        <div className='selector'>
        {option === "hotel" && <Form option={1} days={days} />}
        {option === "car" && <Form option={2} days={days} />}
        </div>

        

      </div>
    </>
  )
}

export default App

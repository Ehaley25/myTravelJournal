import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Locations from './components/Locations'
import NavBar from './components/NavBar'
import data from './data'
import React from 'react'
import { ReactDOM } from 'react'

function App() {
  const [count, setCount] = useState(0)
  let trips = data.map(trip =>{
    return(
        <Locations 
        key = {trip.id}
        {...trip}
      />
    )
  })
  return (
    <div className="App">
      <NavBar />
      {trips}
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [ison, setIson] = useState(false)

 
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleMenu = () => {    
      setIsOpen(!isOpen)
  }
  return(
    <>
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a href="#">Dashboard</a></li>
        <li className="nav-item">
          <a href="#">Widget</a></li>
        <li className="nav-item">
         <button aria-expanded={isOpen ? "true" : "false"} onClick={toggleMenu}>Apps</button>
          <ul className={`sub-menu ${isOpen ? "sub-menu--open" : ""}`} aria-label="Apps">
            <li><a href="#">Calender</a></li>
            <li><a href="#">Chat</a></li>
            <li><a href="#">Email</a></li>
          </ul>
          </li>
      </ul>
    </nav>
    <p>{count}</p>
    <button onClick={() => setCount(count +1)}>increase the number</button>
    <button onClick={() => setCount(count - 1)}>decrease</button>
    <div>
      <img src={ison ? '/bulb.jpg' : '/offbulb.jpg'} 
      alt={ison ? 'lights are on' : 'lights are off'}/>
    </div>
    <button onClick={() => setIson(!ison)}>click me</button>
    </>
  )
}

export default App

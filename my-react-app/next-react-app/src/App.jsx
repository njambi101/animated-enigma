import Headers from './header'
import Footer from './footer'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
    const [num, setNum] = useState(0)
    const handleClick = () => {
      setNum (num + 1)
    }

  
    
    const [name, setName] = useState("")
    const [check, setCheck] = useState(true)

    const [color, setColor] = useState('red')
    
   const [car, setCar] = useState(
    {
      brand : "ferrari",
      color : "blue",
      year : "2002"
    }
   )
   
   const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
   })
   
   useEffect(() => {
    if(darkMode){
      document.body.classList.add('dark')
      localStorage.setItem("theme", "dark")

    } else {
      document.body.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
   })
  return (
    <>
    <div className="app">
      <h1>{darkMode ? "Dark Mode" : "light Mode"}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
    </div>
    <Headers/>
    <main>
      <p>it is a {car.brand} from {car.year} with {car.color}.</p>
      <button >cr</button>
     <p>My color is {color}</p>
     <button onClick={() => setColor('blue')}>change color</button>
      <h1>REACTECH SOLUTIONS</h1>
      <p>We React to Your, Building Tomorrow's Interfaces Today.</p>
      <h1>{num}</h1>
      <button onClick={handleClick}>add one</button><br /><br />

      <input
      value={name} 
      onChange={(e) => setName(e.target.value)}
      placeholder='your name'/>
      <p>{name || 'someone'} </p>
      <input type="checkbox"  
      checked={check} 
      onClick={(e) => setCheck(e.target.value)}/>
      <p>{name} {check ?  'likes react' : 'does not like react'}</p>
    </main>
    <Footer names="grace"  age = {30}/>
    </>
  )
}

export default App

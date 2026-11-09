import Headers from './header'
import Footer from './footer'
import './App.css'
import { useState } from 'react'

function App() {
    const [num, setNum] = useState(0)
    const handleClick = () => {
      setNum (num + 1)
    }

  
    
    const [name, setName] = useState("")
    const [check, setCheck] = useState(true)

    const [color, setColor] = useState('red')

    
  return (
    <>
    <Headers/>
    <main>
      <p onChange={() => ()}>how are you</p>
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

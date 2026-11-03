import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App(props) {
  const btnStyle = {
    backgroundColor: 'blue',
    color: 'white',
    width: 50,
    height:20,
    

  };
  const x = "my class"
  let fruit = "banana"
  let n;
  if (fruit) {
    n = "goodwork!"
  }
  return (
    <>
    <h2>i am color {props.color}</h2>
    <h1 className={x} >Hello world</h1>
    <button 
      style = {btnStyle} 
      className = 'btn-prymary'
      onClick = {() => alert('clicked')}
      disabled = {true}
    ></button>
    <h2>{(x) === "my classe" ? "banana" : "apple"}</h2>
    <h1>the answers are {n}</h1>
    <div>
      <img src="https://images.unsplash.com/photo-1791395387927-b31ea1248318?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D" alt="sky scripers" 
      width={100}
      height={100}/>
      <p>what is going on nere</p>
      <h2>this is button</h2>
    </div>
        </>
        
    );
}




export default App

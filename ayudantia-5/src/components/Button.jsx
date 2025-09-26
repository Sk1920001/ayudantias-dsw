import {useState} from 'react'
import  './Button.css'

function Button({texto, color}) {
  const [count, setCount] = useState(0);

  const handleClick = () =>{
    setCount(count + 1);
  }

  return (
    <>
      <button class="main-button" style={{backgroundColor: color}} onClick={()=>{handleClick()}}>{texto}: {count}</button>
    </>
  )
}

export default Button 

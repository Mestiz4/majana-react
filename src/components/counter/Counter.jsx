import React, {useState} from "react"

import "./Counter.css"

const Counter = ({initial, stock, onAdd}) => {

const [counter, setCounter] = useState(initial);

const decrease = () =>{

    setCounter(counter - 1)
}

const increase = () =>{

    setCounter(counter + 1)
}

  return (
    <div className="counter-container">
        <button disabled={counter <= 1} onClick={decrease} className="boton">-</button>
        <span>{counter}</span>
        <button disabled={counter >= stock} onClick={increase} className="boton">+</button>
        <div>
            <button disabled={stock <= 0} onClick={() => onAdd (counter)} >Agregar al carrito</button>
        </div>
    </div>
  )
}

export default Counter
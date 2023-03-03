import React,{useState, useEffect} from 'react'
import "./count.css"

export const Count = ({initial, stock, onAdd}) => {

    const [count, setCount]= useState(parseInt(initial) );
//decrece cantidad
    const decrease=()=>{
        setCount(count-1);
    }
//aumenta cantidad
    const increase=()=>{
        setCount(count+1);
    }

    useEffect(()=>{
        setCount (parseInt( initial));
    },[initial])

  return (
    <div className='counter'>
        {/* desactiva contador en 0 */}        
        <button disabled={ count <=1 } onClick={decrease}>-</button>
        <span>{count}</span>
        {/* recibe a stock como maxima cantidad */}        
        <button disabled={ count >= stock } onClick={increase}>+</button>
        <div>
        <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default Count;

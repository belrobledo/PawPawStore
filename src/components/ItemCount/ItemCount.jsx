//-----------------------------------------------------//
// COMPONENTE: Contador de Item. Suma/Resta una unidad.//
//-----------------------------------------------------//
import React, { useState } from 'react'


export default function ItemCount({stock = 0, onAddToCart}) {
    const [count, setCount] = useState(1);
    console.log(onAddToCart);

    function HandleAdd(event){
        if(count < stock){
            setCount(count + 1);
        }
    }

    function HandleSubstract(event){
        if(count > 1){
            setCount(count - 1);
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <button className="btn btn-outline-dark btn-sm m-1" onClick={HandleSubstract} disabled={count<=1}>-</button>
            <p className="p-1">{count}</p>
            <button className="btn btn-outline-dark btn-sm m-1" onClick={HandleAdd} disabled={count>=stock}>+</button>
            <button className="btn btn-outline-dark m-1" onClick={ () => onAddToCart(count)}>Agregar al Carrito</button>
        </div>
    )
}

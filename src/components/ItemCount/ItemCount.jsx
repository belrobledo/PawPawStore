//-----------------------------------------------------
// COMPONENTE: Contador de Item. Suma/Resta una unidad.
//-----------------------------------------------------
import React, { useState } from 'react'


export default function ItemCount({stock = 0}) {
    const [count, setCount] = useState(1);

    function HandleAdd(event){
        if(count < stock){
            setCount(count + 1);
        }
    }

    function HandleSubstrac(event){
        if(count > 0){
            setCount(count - 1);
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <button className="btn btn-outline-dark btn-sm m-1" onClick={HandleSubstrac} disabled={count<=0}>-</button>
            <p className="p-1">{count}</p>
            <button className="btn btn-outline-dark btn-sm m-1" onClick={HandleAdd} disabled={count>=stock}>+</button>
            <button className="btn btn-outline-dark m-1">Agregar al Carrito</button>
        </div>
    )
}

import React from 'react'
import './orderItem.css'

export default function OrderItem({item}) {
  return (
    <div className='card-ticket d-flex flex-row text-left border rounded mb-1 m-auto p-2'>
        <div className="my-auto">
            <img className="card-ticket-img m-2 ms-5" src={item.imgurl} alt={item.name} />
        </div>
        <div className="my-auto">
            <p className="my-auto"><b>{item.name}</b></p>
            <p className="my-auto">Cantidad: {item.quantity}</p>
            <p className="my-auto">${item.price.toLocaleString()}</p>
        </div>
    </div>
  )
}

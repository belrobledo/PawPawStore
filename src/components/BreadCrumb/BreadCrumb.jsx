import React from 'react'
import { Link } from 'react-router-dom'
import "./breadCrumb.css"

export default function BreadCrumb({currentPage}) {

    switch(currentPage){ //fallthrough
        case 'All':
            return (
                <div className='container pt-4 ps-5 pb-1'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">Productos</li>
                    </ol>
                </div>
            )
        case 'Gatos':
        case 'Perros':
        case 'Peces':
            return (
                <div className='container pt-4 ps-5 pb-1'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/category/All">Productos</Link></li>
                        <li className="breadcrumb-item active">{currentPage}</li>
                    </ol>
                </div>
            )
        case 'Detail':
            return (
                <div className='container pt-4 ps-5 pb-1'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/category/All">Productos</Link></li>
                        <li className="breadcrumb-item active">Detalle</li>
                    </ol>
                </div>
            )
        case 'Checkout':
            return (
                <div className='container pt-4 ps-5 pb-1'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">Checkout</li>
                    </ol>
                </div>
            )
        default:
            return(
                <></>
            )
    }
}

import React from 'react'

export default function CheckoutForm() {
  return (
    <form>
        <h4 className="mb-3">Datos del Envío</h4>
        <div className="row g-3">
            <div className="col-sm-6">
                <label for="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" required />
            </div>
            <div className="col-sm-6">
                <label for="apellido" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="apellido" required />
            </div>
            <div className="col-12">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" required />
            </div>
            <div className="col-9">
                <label for="direccion" className="form-label">Dirección</label>
                <input type="text" className="form-control" id="direccion" placeholder="Calle 123, Ciudad, Provincia" required />
            </div>
            <div className="col-md-3">
                <label for="cp" className="form-label">Código Postal</label>
                <input type="text" className="form-control" id="cp" required />
            </div>
        </div>
        
        <hr className="my-4" />

        <h4 className="mb-3">Forma de Pago</h4>
        <div className="my-3">
            <div className="form-check">
                <input id="credit" name="metodoPago" type="radio" className="form-check-input" defaultChecked required />
                <label className="form-check-label" for="credit">Tarjeta de Crédito</label>
            </div>
            <div className="form-check">
                <input id="debit" name="metodoPago" type="radio" className="form-check-input" required />
                <label className="form-check-label" for="debit">Tarjeta de Débito</label>
            </div>
        </div>
        <div className="row gy-3">
            <div className="col-md-6">
                <label for="cc-nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="cc-nombre" required />
                <small className="text-muted">Nombre como figura en la tarjeta</small>
            </div>
            <div className="col-md-6">
                <label for="cc-numero" className="form-label">Número de la Tarjeta</label>
                <input type="text" className="form-control" id="cc-numero" placeholder="xxxx-xxxx-xxxx-xxxx" required />
            </div>
            <div className="col-md-3">
                <label for="cc-vencimiento" className="form-label">Vencimiento</label>
                <input type="text" className="form-control" id="cc-vencimiento" placeholder="mm/aa" required />
            </div>
            <div className="col-md-3">
                <label for="cc-cvv" className="form-label">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="xxx" required />
            </div>
        </div>

        <hr className="my-4" />

        <button className="w-100 btn btn-primary btn-lg" type="submit" id="botonPagar">Finalizar Compra</button>
    </form>
  )
}

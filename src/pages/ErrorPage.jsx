import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div class="container">
      <div class="d-flex justify-content-center">
          <div class="d-flex flex-column justify-content-center">
              <h1 class="text-primary mx-auto my-5">Oops!</h1>
              <h3 class="mx-auto">Se ha producido un error.</h3>
              <h3 class="mx-auto">Intente nuevamente.</h3>
              <Link to="/" class="mx-auto my-5"><button class="btn btn-primary">Volver al Inicio</button></Link>
          </div>
          <div class="d-flex">
              <div class="d-flex justify-content-center">
                  <img src="/img/error.png" alt="error" class="img-unselect my-auto" width="200px" height="auto"/>
              </div>
          </div>
      </div>
    </div>
  )
}

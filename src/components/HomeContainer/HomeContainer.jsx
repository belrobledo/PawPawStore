import React from 'react'
import Banner from './Banner'

export default function HomeContainer() {
  return (
    <div className='container-fluid pt-2 px-3'>
      <div className='row'>
        <div className='col-sm-12 col-md-4 col-lg-3 p-3'>
          <Banner category="Productos"/>
        </div>
        <div className='col-sm-12 col-md-8 col-lg-9'>
          <div className='row'>
            <div className='col-12 col-sm-12 p-3'>
              <Banner category="Gatos"/>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-md-6 p-3'>
              <Banner category="Perros"/>
            </div>
            <div className='col-sm-12 col-md-6 p-3'>
              <Banner category="Peces"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

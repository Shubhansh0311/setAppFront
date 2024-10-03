import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Mihome = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <>
      <h1 className='heading_primary'>{location.pathname.replace('/', '')}</h1>
      <span
        onClick={() => {
          navigate('/About')
        }}
      ></span>
      <div className='mihome'>
        <div className='mihome1'>
          <img src='' alt='img14'>14</img>
          <h1 className='text_primary'>MIUI 14</h1>
          <h4 className='text_secondary'>14.0.04.0 TMASDAG</h4>
          <p>What's new</p>
        </div>
      </div>
    </>
  )
}

export default Mihome

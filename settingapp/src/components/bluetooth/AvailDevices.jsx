import React from 'react'
import headphone from '../../images/headphone.png'
import { useNavigate } from 'react-router-dom'

const AvailDevices = () => {
  const devices = ['samsung', 'redmi', 'vivo', 'oppo', 'gionee']

  const navigate = useNavigate()
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate(-1)
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Rarely used devices</h1>
        {devices.map(e => {
          return (
            <span
              className='app_btn'
              onClick={() => {
                navigate('/devices')
              }}
              style={{ display: 'flex' }}
            >
              <img src={headphone} className='bluetoothIcons' alt='devices' />
              <div className='app'>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontWeight: 'bold' }}>{e}</p>
                  <h5 style={{ color: 'grey' }}>Saved</h5>
                </div>
                <span>
                  {' '}
                  <i class='fa-solid fa-greater-than bluetoothGreater'></i>
                </span>
              </div>
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default AvailDevices

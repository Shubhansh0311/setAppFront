import React from 'react'
import { useNavigate } from 'react-router-dom'

const Devices = () => {
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
        <h1 className='heading_primary'>Paired Bluetooth device</h1>
        <div style={{margin:'10px'}}>
          <span
            className='app_btn'
            style={{ display: 'flex', margin: '0px' }}
          >
            <div className='app'>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: 'bold' }}>Rename</p>
                <h5 style={{ color: 'grey' }}>Saved</h5>
              </div>
              <span>
                {' '}
                <i
                  class='fa-solid fa-greater-than bluetoothGreater'
                  onClick={() => {
                    navigate('/devices')
                  }}
                ></i>
              </span>
            </div>
          </span>
          <h3>Unpair</h3>
        </div>
      </div>
    </div>
  )
}

export default Devices

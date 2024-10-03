import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Status = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <div className='main_container'>
      <div className='sub_container infoContainer' style={{ padding: '10px' }}>
        <span
          className='btn_top'
          onClick={() => {
            navigate('/details')
          }}
        >
          ←
        </span>
        <h1 className='heading_primary'>
          {location.pathname.replace('/', ' ')}
        </h1>
        <div style={{ padding: '5px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className='text_primary'>Battery status</p>
            <span style={{ marginLeft: '6.3rem' }} className='text_secondary'>
              Not charging
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className='text_primary'>Battery level</p>
            <span style={{ marginLeft: '6.3rem' }} className='text_secondary'>
              58%
            </span>
          </div>

          <hr />
          <p className='text_secondary'>BASIC INFO</p>

          <p className='text_primary'>Phone number (sim slot 1)</p>
          <p className='text_secondary'>+919898989855</p>
          <p className='text_primary'>Phone number (sim slot 2)</p>
          <p className='text_secondary'>+919898989855</p>
          <hr />

          <p className='text_secondary'>DEVICE DETAILS</p>

          <p className='text_primary'>Sim status(sim slot 1)</p>
          <p className='text_secondary'>airtel</p>
          <p className='text_primary'>Sim status(sim slot 2)</p>
          <p className='text_secondary'>Jio True 5G</p>
          <p className='text_primary'>Model</p>
          <p className='text_secondary'>Redmi Note 12 Pro+ 5G</p>
          <p className='text_primary'>IMEI(sim slot 1)</p>
          <p className='text_secondary'>2323245342345235235</p>
          <p className='text_primary'>IMEI status(sim slot 2)</p>
          <p className='text_secondary'>2323245342345235235</p>

          <hr />
          <p className='text_secondary'>DEVICE IDENTIFIERS</p>

          <p className='text_primary'>IP address</p>
          <p className='text_secondary'>2455:55v4:1r:eer4:5000::232.0.0.2</p>
          <p className='text_primary'>Device Wi-Fi MAC address</p>
          <p className='text_secondary'>Not available</p>
          <p className='text_primary'>Bluetooth address</p>
          <p className='text_secondary'>a3:g7:98:a0:4d:ad</p>
          <p className='text_primary'>Uptime</p>
          <p className='text_secondary'>7:10:19</p>
        </div>
      </div>
    </div>
  )
}

export default Status

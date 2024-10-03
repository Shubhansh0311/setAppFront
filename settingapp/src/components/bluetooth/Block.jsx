import React from 'react'
import exclamation from '../../images/exclamation.png'
import { useNavigate } from 'react-router-dom'
const Block = () => {
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
        <h1 className='heading_primary'>Bluetooth blocklist</h1>

        <div className='core_container'>
          <img
            alt='img'
            style={{ width: '80px', height: 'auto', borderRadius: '15px' }}
            src={exclamation}
          />
          <h2 style={{ textAlign: 'center', margin: '20px', color: '#91b1d9' }}>
            {' '}
            No devices
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Block

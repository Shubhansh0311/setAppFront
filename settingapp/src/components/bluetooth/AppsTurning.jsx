import React from 'react'
import { useNavigate } from 'react-router-dom'
import playService from '../../images/playService.png'
import battery from '../../images/battery.png'
import miShare from '../../images/miShare.png'
const AppsTurning = () => {
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
        <h1 className='heading_primary'> Apps turning on Bluetooth</h1>
        <div style={{ margin: '10px' }}>
          <span className='reset'>
            <img src={playService} className='imgSize img_position' />
            <div>
              <h3>Google Play Services</h3>
              <h4 className='text_secondary'>
                2023-1-18 00:10:34 This app turned on Bluetooth
              </h4>
            </div>
          </span>
          <span className='reset'>
            <img src={battery} className='imgSize img_position' />
            <div>
              <h3>Battery and performance</h3>
              <h4 className='text_secondary'>
                2023-1-18 00:10:34 This app turned on Bluetooth
              </h4>
            </div>
          </span>
          <span className='reset'>
            <img src={miShare} className='imgSize img_position' />
            <div>
              <h3>Mi Share</h3>
              <h4 className='text_secondary'>
                2023-1-18 00:10:34 This app turned on Bluetooth
              </h4>
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default AppsTurning
